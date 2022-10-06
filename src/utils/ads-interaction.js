import base64 from 'react-native-base64';
import { useLocation } from 'react-router-dom';

export function getUserNameFromLocal(){
    if (localStorage.getItem('data')==null){
        let data = {
            username: ""
        }
        localStorage.setItem('data', JSON.stringify(data));
    }
    const userData = JSON.parse(localStorage.getItem('data'));
    return userData.username;
}
function getCookieUniqueKey(){
    //navigator.cookieEnabled
    //IP Address https://api.ipify.org/?format=json
    var match = document.cookie.match(new RegExp('(^| )' + 'iqzplusEXID' + '=([^;]+)'));
      if (match!=null) {
        return match[2];
      }
      else{
        const externalID = 'iqz_'+Date.now().toString(36) + Math.random().toString(36).substr(2);
        document.cookie = "iqzplusEXID="+externalID+"; path=/iqz-plus; Expires="+new Date(new Date().getTime()+1000*60*60*24*365).toGMTString();
        return externalID;
      }
}
const serverURL= 'https://pega-86-demo.iqzsystems.io';

export async function validateAssociation(){
    const requestBody = {
        SubjectID: getUserNameFromLocal(),
        ExternalID: getCookieUniqueKey(),
    }
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestBody)
    };
    let response = await fetch(serverURL+'/prweb/api/PegaMKTContainer/v1/ValidateAssociation', requestOptions);
    response = await response.json();
    if(response.Message != "Success"){
        const externalID = 'iqz_'+Date.now().toString(36) + Math.random().toString(36).substr(2);
        document.cookie = "iqzplusEXID="+externalID+"; path=/iqz-plus; Expires="+new Date(new Date().getTime()+1000*60*60*24*365).toGMTString();
    }
    return response;
}
//ALWAYS return in lowercase !!!!
export function getOrgName(){
    const location = window.location.href;
    if(location.includes("sunlife"))
    {
        return "sunlife";
    }
    if(location.includes("HealnHale"))
    {
        return "pega";
    }
    return "iqz";
}

export function getHomeURL(){
    return "/iqz-plus";
}
export function getLoginURL(){
    if(getOrgName()=='sunlife'){
        return "/iqz-sunlife/login";
    }
    return "/login";
}
export function getAccountURL(){
    if(getOrgName()=='sunlife'){
        return "/iqz-sunlife/account";
    }
    return "/account";
}
export function getWalletUrl(){
    if(getOrgName()=='sunlife'){
        return "/images/wallet.svg";
    }
    return "/images/low-account-minimum.svg";
}
export function getHeaderLogo(){
    if(getOrgName()=='sunlife'){
        return "/images/sunlife-white.svg";
    }
    return "/images/logo-top.svg";
}
export function getFooterLogo(){
    if(getOrgName()=='sunlife'){
        return "/images/sunlife-logo-footer.svg";
    }
    return "/images/logo-footer.svg";
}
export function getLearnmoreURL(){
    if(getOrgName()=='sunlife'){
        return "/iqz-sunlife/learn-more";
    }
    return "/learn-more";
}
export function getBundledURL(){
    if(getOrgName()=='sunlife'){
        return "/iqz-sunlife/bundled";
    }
    return "/bundled";
}
export async function getAds() {
    const objValue = getOrgName();
    
    const requestBody = {
        SubjectID: getUserNameFromLocal(),        
        CustomerID: getUserNameFromLocal(),
        ExternalID: getCookieUniqueKey(),
        ContextName: 'Customer',
        ContainerName: "CDHOffers",
       // ContainerName: 'WebTopOffers',
        Channel: 'Web',
        Direction: 'Inbound',
        Contexts: [
            {
            "Type": "CurrentPage",
            "Value": "WebOffers",
             "Key": "Intend"
           }, {
            "Type": "CurrentPage",
            "Value": objValue,
             "Key": "Org"
           },
        ]
    }
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestBody)
    };
    let response = await fetch(serverURL+'/prweb/PRRestService/PegaMKTContainer/V3/Container', requestOptions);
    response = await response.json();
    return response;
}

export async function getCustom() {
    const objValue = getOrgName();
    
    const requestBody = {
        SubjectID: getUserNameFromLocal(),        
        CustomerID: getUserNameFromLocal(),
        ExternalID: getCookieUniqueKey(),
        ContextName: 'Customer',
        ContainerName: "Personalized",
       // ContainerName: 'WebTopOffers',
        Channel: 'Web',
        Direction: 'Inbound',
        Contexts: [
            {
            "Type": "CurrentPage",
            "Value": "Personalized",
             "Key": "Context"
           }, {
            "Type": "CurrentPage",
            "Value": objValue,
             "Key": "Org"
           },
        ]
    }
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestBody)
    };
    let response = await fetch(serverURL+'/prweb/PRRestService/PegaMKTContainer/V3/Container', requestOptions);
    response = await response.json();
    return response;
}

export async function clearCache() {
   
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': 'Basic '  + base64.encode('SupportUser' + ":" + 'rules@123') }
    };
    let response = await fetch(serverURL+'/prweb/api/v1/nodes/all/caches/conclusion/clear?source=memory', requestOptions);
    response = await response.json();
    return response;
}
export async function getSimilarProducts(data) {
    const objValue = getOrgName();
    const requestBody = {
        SubjectID: getUserNameFromLocal(),
        CustomerID: getUserNameFromLocal(),
        ExternalID: getCookieUniqueKey(),
        ContextName: 'Customer',
      //  ContainerName: 'SimilarOffers',
        ContainerName: 'NBASimilarOffers',
        Channel: 'Web',
        Direction: 'Inbound',
        Contexts: [{
            "Type": "CurrentPage",
            "Value": data.Name,
             "Key": "Offer"
           },
           {
            "Type": "CurrentPage",
            "Value": data.Group,
            "Key": "Group"
           },
           {
            "Type": "CurrentPage",
            "Value": data.ParentGroup,
            "Key": "ParentGroup"
           },
           {
            "Type": "CurrentPage",
            "Value": data.ParentGroup == ""? data.Group:data.ParentGroup,
            "Key": "RelevantGroup"
           },
            {
            "Type": "CurrentPage",
            "Value": "SimilarProducts",
             "Key": "Context"
           },
           {
            "Type": "CurrentPage",
            "Value": objValue,
             "Key": "Org"
           },
        ]
    };
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestBody)
    };
    // let response ={};
    let response = await fetch(serverURL+'/prweb/PRRestService/PegaMKTContainer/V3/Container', requestOptions);
    response = await response.json();
    return response;
}

export async function captureClick(data) {
    let response;
    
    const requestBody = {
        SubjectID: getUserNameFromLocal(),
        ExternalID: getCookieUniqueKey(),
        ContextName: data.ContextName,
        //ContainerName: "WebTopOffers",
        ContainerName: "CDHOffers",
        RankedResults: [{
            SubjectID: getUserNameFromLocal(),
            ContextName: data.ContextName,
            Name: data.Name,
            Issue: data.Issue,
            Group: data.Group,
            Rank: data.Rank,
            CampaignID: data.CampaignID,
            InteractionID: data.InteractionID,
            Outcome: "Clicked",
            Channel: "Web",
            Direction: "Inbound",
            Journey: "",
            JourneyStage: "",
            JourneyStep: ""
        }]
    };
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestBody)
    };
    try {
        response = await fetch(serverURL+'/prweb/PRRestService/PegaMKTContainer/V3/CaptureResponse', requestOptions);
        response = await response.json();
    } catch(err) {
        return {
            Status: 'Failed',
            Message: 'The API call failed'
        };
    }
    return response;
}


export async function submitAd(data) {
    let response;
    
    const requestBody = {
        SubjectID: getUserNameFromLocal(),
        ExternalID: getCookieUniqueKey(),
        ContextName: data.ContextName,
        //ContainerName: "WebTopOffers",
        ContainerName: "CDHOffers",
        RankedResults: [{
            SubjectID: getUserNameFromLocal(),
            ContextName: data.ContextName,
            Name: data.Name,
            Issue: data.Issue,
            Group: data.Group,
            Rank: data.Rank,
            CampaignID: data.CampaignID,
            InteractionID: data.InteractionID,
            Outcome: "Accepted",
            Channel: "Web",
            Direction: "Inbound",
            Journey: "",
            JourneyStage: "",
            JourneyStep: ""
        }]
    };
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestBody)
    };
    try {
        response = await fetch(serverURL+'/prweb/PRRestService/PegaMKTContainer/V3/CaptureResponse/Initiate', requestOptions);
        response = await response.json();
    } catch(err) {
        return {
            Status: 'Failed',
            Message: 'The API call failed'
        };
    }
    return response;
}

export async function triggerEvent(data) {
    let response;
    
    const requestBody = {
        CustomerID: getUserNameFromLocal(),
        EventName: "TriggerOutboundCampaign"        
    };
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestBody)
    };
    try {
        response = await fetch(serverURL+'/prweb/api/CustomMarketingArtifacts/V1/Campaign/TriggerRTEvent', requestOptions);
        response = await response.json();
    } catch(err) {
        return {
            Status: 'Failed',
            Message: 'The API call failed'
        };
    }
    return response;
}

export async function capturePageViewEvent(data) {
    let response;
   let hyphen="-";
    let col =":";
    
    const requestBody = {
        CustomerID: getUserNameFromLocal(),
        Event: "PageView",
        EventTimestamp: new Date().toISOString().replaceAll(hyphen, '').replaceAll(col, '').replace('Z',' GMT'),
        PageType: "LearnMore",
        InterestedIn:   data.Group  
    };
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestBody)
    };
    try {
        response = await fetch(serverURL+'/prweb/api/PegaMKTContainer/v1/stream/WebDataStream', requestOptions);
        response = await response.json();
    } catch(err) {
        return {
            Status: 'Failed',
            Message: 'The API call failed'
        };
    } 
   
    return response;
}

export async function capturePageActiveTime(group, seconds) {
    let response;
    let hyphen="-";
    let col =":";
    seconds = Math.round(seconds);
   // callTealium(getUserNameFromLocal(), "PageView", group, group, "120");
    const requestBody = {
        CustomerID: getUserNameFromLocal(),
        Event: "PageView",
        EventTimestamp: new Date().toISOString().replaceAll(hyphen, '').replaceAll(col, '').replace('Z',' GMT'),
        PageType: "LearnMore",
        InterestedIn:   group,
        PageViewActiveTime: seconds
    };
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestBody)
    };
    try {
        response = await fetch(serverURL+'/prweb/api/PegaMKTContainer/v1/stream/WebDataStream', requestOptions);
        response = await response.json();
    } catch(err) {
        return {
            Status: 'Failed',
            Message: 'The API call failed'
        };
    }
    
    return response;
}
export async function simulateCustomerActivity(Type,Amount,Location,Reason, Comment) {
    let response;
    const requestBody = {
        CustomerID: getUserNameFromLocal(),
        Amount: Amount,
        Location: Location,
        Reason:Reason,
        Comment:Comment,
        Type: Type
    };
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestBody)
    };
    try {
        response = await fetch(serverURL+'/prweb/api/PegaMKTContainer/V3/MockData', requestOptions);
        response = await response.json();
        
    } catch(err) {
        return {
            Status: 'Failed',
            Message: 'The API call failed'
        };
    }
    return response;
}
export async function getCustomMsg() {
    let response;
    const requestBody = {
        CustomerID: getUserNameFromLocal()
    };
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestBody)
    };
    try {
        response = await fetch(serverURL+'/prweb/api/PegaMKTContainer/V3/GetNurturingMessage', requestOptions);
        response = await response.json();
        
    } catch(err) {
        return {
            Status: 'Failed',
            Message: 'The API call failed'
        };
    }
    return response;
}
export async function getCutomerActivityRecords() {
    let response;
    const requestBody = {
        CustomerID: getUserNameFromLocal()
    };
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestBody)
    };
    try {
        response = await fetch(serverURL+'/prweb/api/PegaMKTContainer/V3/GetCustomerActivity', requestOptions);
        response = await response.json();
        
    } catch(err) {
        return {
            Status: 'Failed',
            Message: 'The API call failed'
        };
    }
    return response;
}
export async function triggerGeofence(Latitude,Longitude) {
    let response;
    let GeofenceURL = "?CustomerID="+ getUserNameFromLocal()+"&DeviceID=1009p&DeviceLatitude="+Latitude+"&DeviceLongitude="+Longitude;
 
    const requestOptions = {
        method: 'POST',
        headers: { },
    };
    try {
        response = await fetch(serverURL+'/prweb/PRHTTPService/PegaMKTGeolocation/Services/HandleMktGeolocations'+GeofenceURL, requestOptions);
        response = await response.json();
        
    } catch(err) {
        return {
            Status: 'Failed',
            Message: 'The API call failed'
        };
    }
    return response;
}
//Login in localstorage will not be cleared on logout
export function isUserLoggedIn(){
    if (localStorage.getItem('login')==null){
        let login = {
            username: ""
        }
        localStorage.setItem('login', JSON.stringify(login));
    }
    let UserDetails = JSON.parse(localStorage.getItem('login'));
    if(UserDetails.username!=""){
        return true;
    }
    else{
        return false;
    }
}

export function isUserAlreadyLoggedIn(){
    if (localStorage.getItem('data')==null){
        let login = {
            username: ""
        }
        localStorage.setItem('data', JSON.stringify(login));
    }
    let UserDetails = JSON.parse(localStorage.getItem('data'));
    if(UserDetails.username!=""){
        return true;
    }
    else{
        return false;
    }
}
export function callTealium(custID,EventParam, PageNameParam, OfferNameParam, ActiveTimeParam){
    var utag_data = { customer_id:custID+"n" , 
    "tealium_event":"pega_event",
    "page_type":"Testinit",
     CustomerID:custID,
     PegaEvent: EventParam,
     PageName: PageNameParam,
     OfferName: OfferNameParam,
     ActiveTime:ActiveTimeParam
    }
    console.log(JSON.stringify(utag_data));
    // window.utag.view({ variable1:"VARIABLE1 VALUE", variable2:"VARIABLE2 VALUE", variable3:"VARIABLE3 VALUE" });
    window.utag.view(utag_data);
}
export function updateTealium(custID,EventParam, PageNameParam, OfferNameParam, ActiveTimeParam){
    const location = window.location.href;
    var utag_data = { customer_id:getUserNameFromLocal()+"n" , 
    "tealium_event":"DemoEvent",
    "page_type":"Testinit",
     CustomerID:getUserNameFromLocal(),
     PegaEvent: "DemoEvent",
     PageName: location,
     "page_name" : "iqzplus"+location,
     OfferName: "OfferNameParam"
    }
    
    // window.utag.view({ variable1:"VARIABLE1 VALUE", variable2:"VARIABLE2 VALUE", variable3:"VARIABLE3 VALUE" });
    // alert(window.utag);
    if(window.utag  === undefined || window.utag.view  === undefined){}
    else{
        console.log(JSON.stringify(utag_data));
        window.utag.view(utag_data);

        window.utag.link({
            "content_id"         : "38121",
            "page_friendly_url" : "/travel/national_parks",
            "page_name"          : "iqzplus"+location,
            "view_name": "board",
            "event_type": "click",
            "event_name": "edit_note",
            "tealium_event": "edit_note",
            "page_type": "react",
        })
    }
    
}
export function updateGeoData(Cord){
    console.log(Cord);
}