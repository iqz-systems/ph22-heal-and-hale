


<h1 align="center">
<a href="https://devpost.com/software/heal-hale"><img src="https://iqzplus.com/images/hackathonHealAndHale.svg" alt="HealandHale" width="200"></a>
</h1>

<h4 align="center">An easy-to-use application implemented using <a href="https://www.pega.com" target="_blank">Pega</a>.</h4>

<p align="center">
<a href="#key-features"> Key Features</a> •
<a href="#application-packages">Application packages</a> •
<a href="#how-to-install">How To Install</a> •
<a href="#configurations">Configurations</a> •
<a href="#user-guide">User guide</a>
</p>

## Key features
Here are the features implemented in the application and details about the Pega component used.


|  Application Feature              |Pega Component                                                  |
|----------------|-------------------------------|
|Employee outreach|`Pega campaign`, `Email Notifications`            |
|IQZ's Blue bird Bot          |`Pega Digital Messaging Manager`, `Pega NLP`            |
|Bot's recommendations          |`Pega Next Best Designer (CDH)`, `ADM prediction`, `Find Best SME from SMEs Registered (Pega Platform AI)`|
|Feedback collection| `Social Channel integration`,`Outbound campaign`,`Pega Real time event`,`ADM Learning`
|SME registration and Appointment case mangement| `Pega Cosmos react web-embed`, `Pega Process AI ( PMML Model)`, `Pega Cosmos React web portal`
|Model Create/Training| `Train ADM for with Monte Carlo Data Set`, `PMML Model Creation (Monte Carlo Data Set)`



## Application packages

* React application
* Pega marketing application
* Pega platform application


## How to install

#### React application

```bash

# Clone this repository

$ git clone https://github.com/iqz-systems/ph22-heal-and-hale

# Go into the repository

$ cd ph22-heal-and-hale

# Install dependencies

$ npm install

# Run the app

$ npm start

```

> **Note**

> If you're using Linux Bash for Windows, [see this guide](https://www.howtogeek.com/261575/how-to-run-graphical-linux-desktop-applications-from-windows-10s-bash-shell/) or use `node` from the command prompt.

#### Pega marketing application

[see this guide](https://academy.pega.com/topic/importing-application-archive/v1) for importing application into Pega platform. User `CDH-Rules.jar` and `CDH-Context.jar` files to upload.

#### Pega platform application

[see this guide](https://academy.pega.com/topic/importing-application-archive/v1) for importing application into Pega platform. User HnH.zip file to upload.

## Configurations
**Pega Platform Application**
* Configure DSS setting for *`HnHInt•CDHEnvironmentURL`* as url of the  installed *`Pega marketing application`*
* Digital messaging manager credentials are unique to each environment. Configure the associated key/secret for your installed Pega Platform environment.

**Pega Marketing Application**
* Enable multi-channel campaign for feedback collection, 
`Strategy:  SendFeedback, Audience:  SendFeedback
 Engagement: Daily`.
 * Run the data flow for response collection 
 `Rule Name:  ProcessResponseStream,
Applies To:  PegaMKT-Data-Response`. Make sure in Real Time Data flow landing page data flow is in in-progress status.
## User guide

Refer [this guide](https://github.com/iqz-systems/ph22-heal-and-hale/userguide.pdf) for application flow

