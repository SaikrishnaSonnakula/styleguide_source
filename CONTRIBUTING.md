# Contributing to Styleguide

Welcome to contributing! We welcome all in the KP developer community contribute to styleguide, all contributions are voluntary. Please contact us via [Hipchat](https://hipchat.kp.org/chat/room/19) room "Styleguide Core" if you haven't already. You can ask questions about Styleguide and what you need to get it up and running as well as how best to Fork and get your contribution approved.

## Ways you are contributing...
- Raising issues - bugs, defects, typos or just bad grammer. You can help us correct this.
- New features - you've worked on something in your own project at KP, and you think it would be useful for other projects you can added at feature. But please remember to consult with a UX person like Jennifer Beasely or Bob Altman to get their head-nod. They would most likely have an idea that your feature maybe used in other parts of KP development.
- Writing documentation - if you think there's a better way to explain the process please let us know and you can help us write. You don't even have to be too technical on this one. =)

## Before You begin
Make sure you have:

* Access to Stash and the Style guide repo and the build plugin
* [SSH Keys](https://stash.kp.org/plugins/servlet/ssh/account/keys) setup in Stash
* [Node JS](https://nodejs.org/en/blog/release/v0.10.42/) to run the build plugin grunt taskrunner 
* Join the RWD Styleguide chat room, use the node.js wizard to install onto your machine
	* If you ​are using the latest version of hipchat
	* Go to https://hipchat.kp.org/invite/1/27bf4d05b314fdfb36b4dc25f5752b28
	* Fill out the following form and Complete the sign up process
	* Launch the hipchat client.
	* Click HipChat on the top bar, File > Login to Another Team ![Step2 PullRequest](https://stash.kp.org/projects/RWD/repos/styleguide/browse/_contributeme-imgs/hipchat-second-server.png)
	* Server is: hipchat.kp.org (No http:// or https://)​​
	* Enter Your Work email and SSO password.


## Process of Editing or Submitting

### Summary
The Current process is: fork the project, create a Pull Request, have the RWD styleguide team review, recieve minimum of 2 approvals, and merge the Pull Request.

Note: you can still use the method of creating a branch however the team is slowly moving away from this process.

### Detailed Steps
1. In the styleguide repository fork the project to your own account
2. Pull down your forked version of styleguide locally to your machine
![Forking styleguide](https://stash.kp.org/projects/RWD/repos/styleguide/browse/_contributeme-imgs/fork-screenshot.png)
3. In your Styleg Guide> Git  directory , update the config file to the following so you can fetch pull requests, sync with upstream,and stay up to date with the latest code:
```
		[core]
		repositoryformatversion = 0
		filemode = true
		bare = false
		logallrefupdates = true
		ignorecase = true
		precomposeunicode = true
		[remote "origin"]
		url = ssh://git@stash.kp.org/~i004217/styleguide.git
		[remote "upstream"]
		url = ssh://git@stash.kp.org/rwd/styleguide.git
		fetch = +refs/heads/*:refs/remotes/upstream/*
		fetch = +refs/pull-requests/*/from:refs/remotes/upstream/pr/*
		[branch "master"]
		remote = origin
		merge = refs/heads/master
		[user]
		email = your.email.used.instash.@kp.org
```

4. Make your changes locally in the new forked copy make the code changes and push code changes to your forked master branch
5. Commit your forked project to your account make sure you do not commit to the upstream version aka the live version
6. Create a [Pull Request](https://www.atlassian.com/git/tutorials/making-a-pull-request/) (PR ) using your forked repo
![Create PullRequest](https://stash.kp.org/projects/RWD/repos/styleguide/browse/_contributeme-imgs/create-pullRequest.png)
![Step2 PullRequest](https://stash.kp.org/projects/RWD/repos/styleguide/browse/_contributeme-imgs/pullRequest-step2.png)
7. In your Pull request provide detailed information about the reason for the fix, and a screenshot of the output from your local host.
7. You need <strong> 2 approvals</strong> before you can merge your pull request ![Step2 PullRequest](https://stash.kp.org/projects/RWD/repos/styleguide/browse/_contributeme-imgs/approval-Pullrequest.png)
8. It's recommended to stay up-to-date in the RWD [Hipchat Styleguide Chat Room](https://hipchat.kp.org/chat/room/19), the project is synced in Jira and hipchat.  Pull requests (PR), Merges, and commits alert everyone in the RWD Styleguide ​chatroom of activity.
9. After your Code is approved by 2 reviewers: Merge your code
10. Party cause you are now a contributing member of the Styleguide repo

Welcome to contributing! Looking forward to your contributions. Please send any questions or concerns via [Hipchat Styleguide Room](https://hipchat.kp.org/chat/room/19).


### Resources and Helpful Links
* [jira board](https://jira.kp.org/browse/STYLE)
* [Online Styleguide](http://dev10.kaiserpermanente.org/styleguide)
* [Builds](http://xlzxdap0035x.lvdc.kp.org:8888/job/rwd-styleguide-AEM/
http://xlzxdap0035x.lvdc.kp.org:8888/job/rwd-styleguide-deploy-DEV10/)
* [Hipchat Styleguide Room](https://hipchat.kp.org/chat/room/19)
* [Build Plugin](https://stash.kp.org/projects/RWD/repos/build-plugin/browse)
* [Current Styleguide PullRequests](https://stash.kp.org/projects/RWD/repos/styleguide/pull-requests)


## Additional Guidelines for Issues and Requests

There are lots and lots of ways to get involved, this document covers:

* [Raising Issues](#raising-issues)
* [Feature Requests](#features)
* [Change Requests](#changes)
* [Submitting Pull Requests](#pull-requests)
* [Testing and Quality Assurance](#testing)
* [Writing Documentation](#documentation)
* [Accessibility](#accessibility)


<a name="raising-issues"></a>
### Raising Issues

Did you find a bug, defect, typo? Help us by bringing it up in Hipchat and check to see if it has been identified in our [roadmap](https://jira.kp.org/secure/RapidBoard.jspa?rapidView=50&projectKey=STYLE).
If you have a proposed solution, let us know by [submitting a pull-request](#pull-requests).

<a name="features"></a>
### Feature Requests

Please take a look at the [roadmap](https://jira.kp.org/secure/RapidBoard.jspa?rapidView=50&projectKey=STYLE) to see if your suggestion is in our backlog.

<a name="changes"></a>
### Change Requests

Please take a look at the [roadmap](https://jira.kp.org/secure/RapidBoard.jspa?rapidView=50&projectKey=STYLE) to see if your suggestion is in our backlog or reach out to us via Hipchat.

### Writing Documentation

If you think there's a better way to explain the process of contributing to Styleguide, please let us know and help us write. You don't even have to be too technical on this one. =)

<a name="pull-requests"></a>
### Submitting Pull Requests for new Features and Bug Fixes

## Submitting Pull Requests for new Features and Bug Fixes


If you have a new feature you'd like to merge into Styleguide please consult a UX designer like Jennifer Beasely or Bob Altman to get their thumbs up on having your work shared across projects that use Styleguide.

Pull requests are **awesome**. If you're looking to raise a PR for something which doesn't have an open issue, please think carefully about [raising an issue](#raising-issues) which your PR can close, especially if you're fixing a bug. 
This makes it more likely that there will be enough information available for your PR to be properly tested and merged.
To make sure your PR is accepted as quickly as possible, please take a minute to check the guidelines on:

* [commit messages]()
* [cleaning-up history]()
* [not breaking the build]()

##### Need Help?

If you're not completely clear on how to submit / update / *do* Pull Requests, please check out Stash's [Pull Request guide](https://confluence.atlassian.com/display/STASHSOURCE/Using+pull+requests+in+Stash), or visit [Hipchat](https://hipchat.kp.org/chat/room/19) and we'll help you out.


<a name="testing"></a>
### Testing and Quality Assurance

Before opening a pull request, make sure all tests are green.
If your pull request is adding a new javascript module, make sure you unit test the functionality.
``` grunt ci ```

#### Checking out a Pull Request

Read this blog post for [detailed instructions](http://dev.ghost.org/easy-git-pr-test/) on configuring your environment to allow you to checkout pull requests with this simple command: `pr #1234`
In terms of Stash configuration the second ```fetch``` line mentioned in the post would be 
```
fetch = +refs/pull-requests/*/from:refs/remotes/upstream/pr/*
```

<a name="accessibility"></a>

### Accessibility

#### Kaiser Accessibility Resources and Guidelines
* W3C ARIA Spec
* SSBART
* Mark
* AMP
* Webex Recording
