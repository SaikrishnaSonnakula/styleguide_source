# Contributing to Styleguide (DRAFT)

We're so glad you're thinking about contributing to an KP open source project!

If you're unsure about anything, just ask us on Hipchat — or submit a pull request on Stash and we'll have a look.

The worst that can happen is you'll be politely asked to change something. We appreciate all friendly contributions.

_There is no dedicated Styleguide team, so we could really use your help!_

If you find information is out of date or unclear, please submit a pull request to update it.

Join the [Hipchat](https://hipchat.kp.org/chat/room/19) room "RWD Styleguide" where can ask questions about Styleguide and what you need to get it up and running.

## Ways you can contribute

- Raising issues - bugs, defects, typos/bad grammar in documentation.
- [JIRA Backlog](https://jira.kp.org/browse/STYLE) - check the backlog to see if something is on our roadmap and hasn't been picked up by anyone else.
- New Features - Have you developed a UI component for your app and think it will benefit other KP apps? Consult a UX designer like Jennifer Beasely or Bob Altman for the acceptance criteria for having it added to Styleguide for other teams to use.
- Writing documentation - if you think there's a better way to explain the process please let us know and you can help us write. You don't even have to be too technical on this one. =)

## Before You begin

Make sure you have:

* Access to Stash and the Style guide repo and the build plugin
* [SSH Keys](https://stash.kp.org/plugins/servlet/ssh/account/keys) setup in Stash
* [Node JS](https://nodejs.org/en/blog/release/v0.10.42/) to run the Styleguide locally
* Join the RWD Styleguide chat room, use the node.js wizard to install onto your machine
  * If you're using the latest version of hipchat:
  * Go to https://hipchat.kp.org/invite/1/27bf4d05b314fdfb36b4dc25f5752b28
  * Fill out the following form and Complete the sign up process
  * Launch the hipchat client.
  * Click HipChat on the top bar, File > Login to Another Team

  ![hipchat setup](https://sites.sp.kp.org/teams/dsg/creative/fed/SiteAssets/SitePages/Contributing%20to%20Styleguide/Screen%20Shot%202016-02-19%20at%2011.46.png)

  * Server is: hipchat.kp.org (No http:// or https://)
  * Enter Your Work email and SSO password.

# Guidelines

## Summary

The Current process is: fork the project, create a Pull Request, have the RWD styleguide team review, recieve minimum of 2 approvals, and merge the Pull Request.
For an indepth overview of how to set up your workspace [stream](https://kponline.webex.com/kponline/ldr.php?RCID=0063c015376c2e0aacaff3d482b97010) or [download](https://kponline.webex.com/kponline/lsr.php?RCID=f077e6a97d264315f917bf798974d8fc) this video.

## Development Setup

1. In the styleguide repository fork the project to your own account
2. Pull down your forked version of styleguide locally to your machine

![Forking styleguide](https://sites.sp.kp.org/teams/dsg/creative/fed/SiteAssets/SitePages/Contributing%20to%20Styleguide/Screen%20Shot%202016-02-19%20at%2012.12.46.png)

3. In your StyleGuide> Git directory, update the config file to the following so you can fetch pull requests, sync with upstream, and stay up to date with the latest code:

```
    [core]
    repositoryformatversion = 0
    filemode = true
    bare = false
    logallrefupdates = true
    ignorecase = true
    precomposeunicode = true

    [remote "origin"]
    url = ssh://git@stash.kp.org/~yourNUID/styleguide.git

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

## Building the project locally with grunt

Now that you have your fork set up on the machine, install Styleguide's dependencies by running

```
    npm install
```
After the dependencies are finished installing

```
    grunt serve
```
and point your browser to [http://localhost:4321/](http://localhost:4321/) to see Styleguide running on your machine.


## Testing and Quality Assurance

Before opening a pull request, make sure all tests are green.
If your pull request is adding a new javascript module, make sure you unit test the functionality.

``` grunt ci ```


## Accessibility

Before your pull request is approved, or you approve a pull request, please test your change in a mobile iOS browser using voice over.
Follow the [Apple guidelines](https://developer.apple.com/library/ios/technotes/TestingAccessibilityOfiOSApps/TestAccessibilityonYourDevicewithVoiceOver/TestAccessibilityonYourDevicewithVoiceOver.html) for setting up VoiceOver and using gestures to check accessibility on a device.

### Kaiser Accessibility Resources and Guidelines

* [Mozilla Developer Network Getting Started with ARIA](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA)
* [Practical ARIA Examples](http://heydonworks.com/practical_aria_examples)
* [ARIA Screenreader Compatibility Chart](http://www.powermapper.com/tests/screen-readers/aria/)
* [SSBART Group Toolbox](https://kaiser.ssbbartgroup.com/toolbox.php) -- Contact Mark Stimson or Pauline Kiet if you do not have access to this page.

## Opening a pull request

1. Make your local commits as you would for any project and push them your fork to a topic branch that represents the changes you want to make to Styleguide. By running ``` git push origin my-topic-branch ```
> In git, "branches are cheap and easy." So the best thing to do when adding a new feature or fixing a bug in a git repo is to do that work on a separate "topic" branch.
> That is, a branch whose changes encompass, roughly, a single idea or topic: adds a single feature, or fixes a specific bug.
> This allows you to work on different features/bugs simultaneously and separately. You can keep updating a specific feature after you’ve submitted a pull request for it,
> which is handy if in the course of discussing the pull request other developers suggest changes to it.
> [scholarslab.org](http://scholarslab.org/research-and-development/forking-fetching-pushing-pulling/)
2. Please make sure you push to your fork and not the upstream remote.

3. Create a [Pull Request](https://www.atlassian.com/git/tutorials/making-a-pull-request/) (PR ) using your forked repo

![Create PullRequest](https://sites.sp.kp.org/teams/dsg/creative/fed/SiteAssets/SitePages/Contributing%20to%20Styleguide/Screen%20Shot%202016-02-19%20at%2012.19.39%20PM.png)
![Step2 PullRequest](https://sites.sp.kp.org/teams/dsg/creative/fed/SiteAssets/SitePages/Contributing%20to%20Styleguide/Screen%20Shot%202016-02-19%20at%2012.21.38%20PM.png)

4. In your Pull request provide detailed information about the reason for the fix, and a screenshot of the output from your local host. You need __2 approvals__ before you can merge your pull request.

![Approval PullRequest](https://sites.sp.kp.org/teams/dsg/creative/fed/SiteAssets/SitePages/Contributing%20to%20Styleguide/Screen%20Shot%202016-03-16%20at%202.40.55%20PM.png)

5. It's recommended to stay up-to-date in the RWD [Hipchat Styleguide Chat Room](https://hipchat.kp.org/chat/room/19), the project is synced in Jira and hipchat. Pull requests (PR), Merges, and commits alert everyone in the RWD Styleguide chatroom of activity.
6. After your Code is approved by 2 reviewers, it will be eligible for merging.
7. Once you watch your watching that those changes build and deploy correctly, party cause you are now a contributing member of the Styleguide repo!

# Resources and Helpful Links

* [Jira board](https://jira.kp.org/browse/STYLE)
* [Online Styleguide](http://dev10.kaiserpermanente.org/styleguide)
* [Jenkins Build Job](http://xlzxdap0035x.lvdc.kp.org:8888/job/rwd-styleguide-AEM/)
* [Jenkins Deploy Job](http://xlzxdap0035x.lvdc.kp.org:8888/job/rwd-styleguide-deploy-DEV10/)
* [Hipchat Styleguide Room](https://hipchat.kp.org/chat/room/19)
* [Build Plugin](https://stash.kp.org/projects/RWD/repos/build-plugin/browse)
* [Current open Pull Requests](https://stash.kp.org/projects/RWD/repos/styleguide/pull-requests)

# Reviewing Other Pull Requests

Read this blog post for [detailed instructions](http://dev.ghost.org/easy-git-pr-test/) on configuring your environment to allow you to checkout pull requests with this simple command: `pr #1234`
In terms of Stash configuration the second ```fetch``` line mentioned in the post would be
```
fetch = +refs/pull-requests/*/from:refs/remotes/upstream/pr/*
```

# Need Help?

If you're not completely clear on how to submit / update / or create a  Pull Requests, please check out Stash's [Pull Request guide](https://confluence.atlassian.com/display/STASHSOURCE/Using+pull+requests+in+Stash), or visit [Hipchat Styleguide Room](https://hipchat.kp.org/chat/room/19) and we'll help you out
