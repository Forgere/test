


<!DOCTYPE html>
<html lang="en" class="">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    
    
    <title>zepto/detect.js at master · madrobby/zepto · GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="madrobby/zepto" name="twitter:title" /><meta content="zepto - Zepto.js is a minimalist JavaScript library for modern browsers, with a jQuery-compatible API" name="twitter:description" /><meta content="https://avatars3.githubusercontent.com/u/3390?v=3&amp;s=400" name="twitter:image:src" />
      <meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars3.githubusercontent.com/u/3390?v=3&amp;s=400" property="og:image" /><meta content="madrobby/zepto" property="og:title" /><meta content="https://github.com/madrobby/zepto" property="og:url" /><meta content="zepto - Zepto.js is a minimalist JavaScript library for modern browsers, with a jQuery-compatible API" property="og:description" />
      <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">
    <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">
    <link rel="assets" href="https://assets-cdn.github.com/">
    
    <meta name="pjax-timeout" content="1000">
    

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>
      <meta name="google-analytics" content="UA-3769691-2">

    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="74E72636:5678:5F567D8:5539DE8C" name="octolytics-dimension-request_id" />
    
    <meta content="Rails, view, blob#show" name="analytics-event" />
    <meta class="js-ga-set" name="dimension1" content="Logged Out">
    <meta class="js-ga-set" name="dimension2" content="Header v3">
    <meta name="is-dotcom" content="true">
    <meta name="hostname" content="github.com">
    <meta name="user-login" content="">

    
    <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">


    <meta content="authenticity_token" name="csrf-param" />
<meta content="L1oO4m42WnV5oRMGIfrqPJ8+EyZisBBLMrJkc1KtKR5A8hqJvbOnatRwQ8sbQHhycWxT9FcqdKBKXcZ+4BjMpg==" name="csrf-token" />

    <link href="https://assets-cdn.github.com/assets/github-fbb88baa8c28184f25d1a972d401bb2e63fbed64378a172707460803c12c0440.css" media="all" rel="stylesheet" />
    <link href="https://assets-cdn.github.com/assets/github2-b11477f9aa851e67e46efbb84c8c2c776615ebb9fb07c4551873a066c4e48f67.css" media="all" rel="stylesheet" />
    
    


    <meta http-equiv="x-pjax-version" content="dd45ac9a07a24b9779f43a888c4447e3">

      
  <meta name="description" content="zepto - Zepto.js is a minimalist JavaScript library for modern browsers, with a jQuery-compatible API">
  <meta name="go-import" content="github.com/madrobby/zepto git https://github.com/madrobby/zepto.git">

  <meta content="3390" name="octolytics-dimension-user_id" /><meta content="madrobby" name="octolytics-dimension-user_login" /><meta content="924303" name="octolytics-dimension-repository_id" /><meta content="madrobby/zepto" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="924303" name="octolytics-dimension-repository_network_root_id" /><meta content="madrobby/zepto" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/madrobby/zepto/commits/master.atom" rel="alternate" title="Recent Commits to zepto:master" type="application/atom+xml">

  </head>


  <body class="logged_out  env-production  vis-public page-blob">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div class="wrapper">
      
      
      


        
        <div class="header header-logged-out" role="banner">
  <div class="container clearfix">

    <a class="header-logo-wordmark" href="https://github.com/" data-ga-click="(Logged out) Header, go to homepage, icon:logo-wordmark">
      <span class="mega-octicon octicon-logo-github"></span>
    </a>

    <div class="header-actions" role="navigation">
        <a class="btn btn-primary" href="/join" data-ga-click="(Logged out) Header, clicked Sign up, text:sign-up">Sign up</a>
      <a class="btn" href="/login?return_to=%2Fmadrobby%2Fzepto%2Fblob%2Fmaster%2Fsrc%2Fdetect.js" data-ga-click="(Logged out) Header, clicked Sign in, text:sign-in">Sign in</a>
    </div>

    <div class="site-search repo-scope js-site-search" role="search">
      <form accept-charset="UTF-8" action="/madrobby/zepto/search" class="js-site-search-form" data-global-search-url="/search" data-repo-search-url="/madrobby/zepto/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
  <input type="text"
    class="js-site-search-field is-clearable"
    data-hotkey="s"
    name="q"
    placeholder="Search"
    data-global-scope-placeholder="Search GitHub"
    data-repo-scope-placeholder="Search"
    tabindex="1"
    autocapitalize="off">
  <div class="scope-badge">This repository</div>
</form>
    </div>

      <ul class="header-nav left" role="navigation">
          <li class="header-nav-item">
            <a class="header-nav-link" href="/explore" data-ga-click="(Logged out) Header, go to explore, text:explore">Explore</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="/features" data-ga-click="(Logged out) Header, go to features, text:features">Features</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://enterprise.github.com/" data-ga-click="(Logged out) Header, go to enterprise, text:enterprise">Enterprise</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="/blog" data-ga-click="(Logged out) Header, go to blog, text:blog">Blog</a>
          </li>
      </ul>

  </div>
</div>



      <div id="start-of-content" class="accessibility-aid"></div>
          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    <div id="js-flash-container">
      
    </div>
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        
<ul class="pagehead-actions">

  <li>
      <a href="/login?return_to=%2Fmadrobby%2Fzepto"
    class="btn btn-sm btn-with-count tooltipped tooltipped-n"
    aria-label="You must be signed in to watch a repository" rel="nofollow">
    <span class="octicon octicon-eye"></span>
    Watch
  </a>
  <a class="social-count" href="/madrobby/zepto/watchers">
    481
  </a>

  </li>

  <li>
      <a href="/login?return_to=%2Fmadrobby%2Fzepto"
    class="btn btn-sm btn-with-count tooltipped tooltipped-n"
    aria-label="You must be signed in to star a repository" rel="nofollow">
    <span class="octicon octicon-star"></span>
    Star
  </a>

    <a class="social-count js-social-count" href="/madrobby/zepto/stargazers">
      8,471
    </a>

  </li>

    <li>
      <a href="/login?return_to=%2Fmadrobby%2Fzepto"
        class="btn btn-sm btn-with-count tooltipped tooltipped-n"
        aria-label="You must be signed in to fork a repository" rel="nofollow">
        <span class="octicon octicon-repo-forked"></span>
        Fork
      </a>
      <a href="/madrobby/zepto/network" class="social-count">
        1,943
      </a>
    </li>
</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="mega-octicon octicon-repo"></span>
          <span class="author"><a href="/madrobby" class="url fn" itemprop="url" rel="author"><span itemprop="title">madrobby</span></a></span><!--
       --><span class="path-divider">/</span><!--
       --><strong><a href="/madrobby/zepto" class="js-current-repository" data-pjax="#js-repo-pjax-container">zepto</a></strong>

          <span class="page-context-loader">
            <img alt="" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline  ">
        <div class="repository-sidebar clearfix">
            
<nav class="sunken-menu repo-nav js-repo-nav js-sidenav-container-pjax js-octicon-loaders"
     role="navigation"
     data-pjax="#js-repo-pjax-container"
     data-issue-count-url="/madrobby/zepto/issues/counts">
  <ul class="sunken-menu-group">
    <li class="tooltipped tooltipped-w" aria-label="Code">
      <a href="/madrobby/zepto" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /madrobby/zepto">
        <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>    </li>

      <li class="tooltipped tooltipped-w" aria-label="Issues">
        <a href="/madrobby/zepto/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /madrobby/zepto/issues">
          <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
          <span class="js-issue-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>      </li>

    <li class="tooltipped tooltipped-w" aria-label="Pull requests">
      <a href="/madrobby/zepto/pulls" aria-label="Pull requests" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g p" data-selected-links="repo_pulls /madrobby/zepto/pulls">
          <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull requests</span>
          <span class="js-pull-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>    </li>

      <li class="tooltipped tooltipped-w" aria-label="Wiki">
        <a href="/madrobby/zepto/wiki" aria-label="Wiki" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g w" data-selected-links="repo_wiki /madrobby/zepto/wiki">
          <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>      </li>
  </ul>
  <div class="sunken-menu-separator"></div>
  <ul class="sunken-menu-group">

    <li class="tooltipped tooltipped-w" aria-label="Pulse">
      <a href="/madrobby/zepto/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-selected-links="pulse /madrobby/zepto/pulse">
        <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>    </li>

    <li class="tooltipped tooltipped-w" aria-label="Graphs">
      <a href="/madrobby/zepto/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-selected-links="repo_graphs repo_contributors /madrobby/zepto/graphs">
        <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>    </li>
  </ul>


</nav>

              <div class="only-with-full-nav">
                  
<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><span class="text-emphasized">HTTPS</span> clone URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="https://github.com/madrobby/zepto.git" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><span class="text-emphasized">Subversion</span> checkout URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="https://github.com/madrobby/zepto" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>



<p class="clone-options">You can clone with
  <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a> or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <a href="https://help.github.com/articles/which-remote-url-should-i-use" class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <span class="octicon octicon-question"></span>
  </a>
</p>




                <a href="/madrobby/zepto/archive/master.zip"
                   class="btn btn-sm sidebar-button"
                   aria-label="Download the contents of madrobby/zepto as a zip file"
                   title="Download the contents of madrobby/zepto as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          

<a href="/madrobby/zepto/blob/c454cfeaf9320f1eb89248a585b42acfc8aeedab/src/detect.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:4898cf49cca8507a7e803d23c6c6ae46 -->

<div class="file-navigation js-zeroclipboard-container">
  
<div class="select-menu js-menu-container js-select-menu left">
  <span class="btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    title="master"
    role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/madrobby/zepto/blob/1.1-stable/src/detect.js"
               data-name="1.1-stable"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="1.1-stable">
                1.1-stable
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/madrobby/zepto/blob/benchmark/src/detect.js"
               data-name="benchmark"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="benchmark">
                benchmark
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/madrobby/zepto/blob/gh-pages/src/detect.js"
               data-name="gh-pages"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="gh-pages">
                gh-pages
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/madrobby/zepto/blob/master/src/detect.js"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="master">
                master
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/madrobby/zepto/blob/mocha/src/detect.js"
               data-name="mocha"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="mocha">
                mocha
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/madrobby/zepto/blob/remove-load-shortcut/src/detect.js"
               data-name="remove-load-shortcut"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="remove-load-shortcut">
                remove-load-shortcut
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/madrobby/zepto/tree/v1.1.6/src/detect.js"
                 data-name="v1.1.6"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.1.6">v1.1.6</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/madrobby/zepto/tree/v1.1.5/src/detect.js"
                 data-name="v1.1.5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.1.5">v1.1.5</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/madrobby/zepto/tree/v1.1.4/src/detect.js"
                 data-name="v1.1.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.1.4">v1.1.4</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/madrobby/zepto/tree/v1.1.3/src/detect.js"
                 data-name="v1.1.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.1.3">v1.1.3</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/madrobby/zepto/tree/v1.1.2/src/detect.js"
                 data-name="v1.1.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.1.2">v1.1.2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/madrobby/zepto/tree/v1.1.1/src/detect.js"
                 data-name="v1.1.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.1.1">v1.1.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/madrobby/zepto/tree/v1.1.0/src/detect.js"
                 data-name="v1.1.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.1.0">v1.1.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/madrobby/zepto/tree/v1.0rc1/src/detect.js"
                 data-name="v1.0rc1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.0rc1">v1.0rc1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/madrobby/zepto/tree/v1.0/src/detect.js"
                 data-name="v1.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.0">v1.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/madrobby/zepto/tree/v0.8/src/detect.js"
                 data-name="v0.8"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v0.8">v0.8</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/madrobby/zepto/tree/v0.7/src/detect.js"
                 data-name="v0.7"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v0.7">v0.7</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/madrobby/zepto/tree/v0.6/src/detect.js"
                 data-name="v0.6"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v0.6">v0.6</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/madrobby/zepto/tree/v0.5/src/detect.js"
                 data-name="v0.5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v0.5">v0.5</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/madrobby/zepto/tree/v0.4/src/detect.js"
                 data-name="v0.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v0.4">v0.4</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/madrobby/zepto/tree/v0.3/src/detect.js"
                 data-name="v0.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v0.3">v0.3</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/madrobby/zepto/tree/v0.2/src/detect.js"
                 data-name="v0.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v0.2">v0.2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/madrobby/zepto/tree/v0.1.1/src/detect.js"
                 data-name="v0.1.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v0.1.1">v0.1.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/madrobby/zepto/tree/v0.1/src/detect.js"
                 data-name="v0.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v0.1">v0.1</a>
            </div>
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

  <div class="btn-group right">
    <a href="/madrobby/zepto/find/master"
          class="js-show-file-finder btn btn-sm empty-icon tooltipped tooltipped-s"
          data-pjax
          data-hotkey="t"
          aria-label="Quickly jump between files">
      <span class="octicon octicon-list-unordered"></span>
    </a>
    <button aria-label="Copy file path to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
  </div>

  <div class="breadcrumb js-zeroclipboard-target">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/madrobby/zepto" class="" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">zepto</span></a></span></span><span class="separator">/</span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/madrobby/zepto/tree/master/src" class="" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">src</span></a></span><span class="separator">/</span><strong class="final-path">detect.js</strong>
  </div>
</div>


  <div class="commit file-history-tease">
    <div class="file-history-tease-header">
        <img alt="Zlatan Vasović" class="avatar" data-user="2725611" height="24" src="https://avatars0.githubusercontent.com/u/2725611?v=3&amp;s=48" width="24" />
        <span class="author"><a href="/ZDroid" rel="contributor">ZDroid</a></span>
        <time datetime="2015-01-03T14:56:50Z" is="relative-time">Jan 3, 2015</time>
        <div class="commit-title">
            <a href="/madrobby/zepto/commit/c99aaea1648c4ed641a4a628309f76c7899c9296" class="message" data-pjax="true" title="Happy New Year">Happy New Year</a>
        </div>
    </div>

    <div class="participation">
      <p class="quickstat">
        <a href="#blob_contributors_box" rel="facebox">
          <strong>16</strong>
           contributors
        </a>
      </p>
          <a class="avatar-link tooltipped tooltipped-s" aria-label="madrobby" href="/madrobby/zepto/commits/master/src/detect.js?author=madrobby"><img alt="Thomas Fuchs" class="avatar" data-user="3390" height="20" src="https://avatars0.githubusercontent.com/u/3390?v=3&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="charsleysa" href="/madrobby/zepto/commits/master/src/detect.js?author=charsleysa"><img alt="Stefan Andres Charsley" class="avatar" data-user="1219661" height="20" src="https://avatars0.githubusercontent.com/u/1219661?v=3&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="mislav" href="/madrobby/zepto/commits/master/src/detect.js?author=mislav"><img alt="Mislav Marohnić" class="avatar" data-user="887" height="20" src="https://avatars1.githubusercontent.com/u/887?v=3&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="suprMax" href="/madrobby/zepto/commits/master/src/detect.js?author=suprMax"><img alt="Max" class="avatar" data-user="789031" height="20" src="https://avatars3.githubusercontent.com/u/789031?v=3&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="sstephenson" href="/madrobby/zepto/commits/master/src/detect.js?author=sstephenson"><img alt="Sam Stephenson" class="avatar" data-user="2603" height="20" src="https://avatars3.githubusercontent.com/u/2603?v=3&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="kossnocorp" href="/madrobby/zepto/commits/master/src/detect.js?author=kossnocorp"><img alt="Sasha Koss" class="avatar" data-user="52201" height="20" src="https://avatars1.githubusercontent.com/u/52201?v=3&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="haas85" href="/madrobby/zepto/commits/master/src/detect.js?author=haas85"><img alt="haas85" class="avatar" data-user="1210169" height="20" src="https://avatars3.githubusercontent.com/u/1210169?v=3&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="LeoDutra" href="/madrobby/zepto/commits/master/src/detect.js?author=LeoDutra"><img alt="Leonardo Dutra" class="avatar" data-user="444344" height="20" src="https://avatars2.githubusercontent.com/u/444344?v=3&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="ZDroid" href="/madrobby/zepto/commits/master/src/detect.js?author=ZDroid"><img alt="Zlatan Vasović" class="avatar" data-user="2725611" height="20" src="https://avatars2.githubusercontent.com/u/2725611?v=3&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="miketaylr" href="/madrobby/zepto/commits/master/src/detect.js?author=miketaylr"><img alt="Mike Taylor" class="avatar" data-user="67283" height="20" src="https://avatars1.githubusercontent.com/u/67283?v=3&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="mc10" href="/madrobby/zepto/commits/master/src/detect.js?author=mc10"><img alt="Kevin Ji" class="avatar" data-user="1146876" height="20" src="https://avatars2.githubusercontent.com/u/1146876?v=3&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="josh" href="/madrobby/zepto/commits/master/src/detect.js?author=josh"><img alt="Joshua Peek" class="avatar" data-user="137" height="20" src="https://avatars0.githubusercontent.com/u/137?v=3&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="peutetre" href="/madrobby/zepto/commits/master/src/detect.js?author=peutetre"><img alt="Paul Panserrieu" class="avatar" data-user="204569" height="20" src="https://avatars2.githubusercontent.com/u/204569?v=3&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="elgerlambert" href="/madrobby/zepto/commits/master/src/detect.js?author=elgerlambert"><img alt="Elger Lambert" class="avatar" data-user="1628796" height="20" src="https://avatars1.githubusercontent.com/u/1628796?v=3&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="rhumlover" href="/madrobby/zepto/commits/master/src/detect.js?author=rhumlover"><img alt="Thomas LE JEUNE" class="avatar" data-user="1454395" height="20" src="https://avatars3.githubusercontent.com/u/1454395?v=3&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="jbmonroe" href="/madrobby/zepto/commits/master/src/detect.js?author=jbmonroe"><img alt="jbmonroe" class="avatar" data-user="1607804" height="20" src="https://avatars0.githubusercontent.com/u/1607804?v=3&amp;s=40" width="20" /></a>


    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
          <li class="facebox-user-list-item">
            <img alt="Thomas Fuchs" data-user="3390" height="24" src="https://avatars2.githubusercontent.com/u/3390?v=3&amp;s=48" width="24" />
            <a href="/madrobby">madrobby</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Stefan Andres Charsley" data-user="1219661" height="24" src="https://avatars2.githubusercontent.com/u/1219661?v=3&amp;s=48" width="24" />
            <a href="/charsleysa">charsleysa</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Mislav Marohnić" data-user="887" height="24" src="https://avatars3.githubusercontent.com/u/887?v=3&amp;s=48" width="24" />
            <a href="/mislav">mislav</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Max" data-user="789031" height="24" src="https://avatars1.githubusercontent.com/u/789031?v=3&amp;s=48" width="24" />
            <a href="/suprMax">suprMax</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Sam Stephenson" data-user="2603" height="24" src="https://avatars1.githubusercontent.com/u/2603?v=3&amp;s=48" width="24" />
            <a href="/sstephenson">sstephenson</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Sasha Koss" data-user="52201" height="24" src="https://avatars3.githubusercontent.com/u/52201?v=3&amp;s=48" width="24" />
            <a href="/kossnocorp">kossnocorp</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="haas85" data-user="1210169" height="24" src="https://avatars1.githubusercontent.com/u/1210169?v=3&amp;s=48" width="24" />
            <a href="/haas85">haas85</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Leonardo Dutra" data-user="444344" height="24" src="https://avatars0.githubusercontent.com/u/444344?v=3&amp;s=48" width="24" />
            <a href="/LeoDutra">LeoDutra</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Zlatan Vasović" data-user="2725611" height="24" src="https://avatars0.githubusercontent.com/u/2725611?v=3&amp;s=48" width="24" />
            <a href="/ZDroid">ZDroid</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Mike Taylor" data-user="67283" height="24" src="https://avatars3.githubusercontent.com/u/67283?v=3&amp;s=48" width="24" />
            <a href="/miketaylr">miketaylr</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Kevin Ji" data-user="1146876" height="24" src="https://avatars0.githubusercontent.com/u/1146876?v=3&amp;s=48" width="24" />
            <a href="/mc10">mc10</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Joshua Peek" data-user="137" height="24" src="https://avatars2.githubusercontent.com/u/137?v=3&amp;s=48" width="24" />
            <a href="/josh">josh</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Paul Panserrieu" data-user="204569" height="24" src="https://avatars0.githubusercontent.com/u/204569?v=3&amp;s=48" width="24" />
            <a href="/peutetre">peutetre</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Elger Lambert" data-user="1628796" height="24" src="https://avatars3.githubusercontent.com/u/1628796?v=3&amp;s=48" width="24" />
            <a href="/elgerlambert">elgerlambert</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Thomas LE JEUNE" data-user="1454395" height="24" src="https://avatars1.githubusercontent.com/u/1454395?v=3&amp;s=48" width="24" />
            <a href="/rhumlover">rhumlover</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="jbmonroe" data-user="1607804" height="24" src="https://avatars2.githubusercontent.com/u/1607804?v=3&amp;s=48" width="24" />
            <a href="/jbmonroe">jbmonroe</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file">
  <div class="file-header">
    <div class="file-actions">

      <div class="btn-group">
        <a href="/madrobby/zepto/raw/master/src/detect.js" class="btn btn-sm " id="raw-url">Raw</a>
          <a href="/madrobby/zepto/blame/master/src/detect.js" class="btn btn-sm js-update-url-with-hash">Blame</a>
        <a href="/madrobby/zepto/commits/master/src/detect.js" class="btn btn-sm " rel="nofollow">History</a>
      </div>


          <button type="button" class="octicon-btn disabled tooltipped tooltipped-n" aria-label="You must be signed in to make or propose changes">
            <span class="octicon octicon-pencil"></span>
          </button>

        <button type="button" class="octicon-btn octicon-btn-danger disabled tooltipped tooltipped-n" aria-label="You must be signed in to make or propose changes">
          <span class="octicon octicon-trashcan"></span>
        </button>
    </div>

    <div class="file-info">
        75 lines (67 sloc)
        <span class="file-info-divider"></span>
      3.754 kb
    </div>
  </div>
  
  <div class="blob-wrapper data type-javascript">
      <table class="highlight tab-size-8 js-file-line-container">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-c">//     Zepto.js</span></td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code blob-code-inner js-file-line"><span class="pl-c">//     (c) 2010-2015 Thomas Fuchs</span></td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code blob-code-inner js-file-line"><span class="pl-c">//     Zepto.js may be freely distributed under the MIT license.</span></td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code blob-code-inner js-file-line">;(<span class="pl-k">function</span>(<span class="pl-smi">$</span>){</td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">function</span> <span class="pl-en">detect</span>(<span class="pl-smi">ua</span>, <span class="pl-smi">platform</span>){</td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> os <span class="pl-k">=</span> <span class="pl-v">this</span>.os <span class="pl-k">=</span> {}, browser <span class="pl-k">=</span> <span class="pl-v">this</span>.browser <span class="pl-k">=</span> {},</td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code blob-code-inner js-file-line">      webkit <span class="pl-k">=</span> ua.<span class="pl-c1">match</span>(<span class="pl-sr"><span class="pl-pds">/</span>Web<span class="pl-c1">[kK]</span>it<span class="pl-c1">[<span class="pl-cce">\/</span>]</span><span class="pl-k">{0,1}</span>(<span class="pl-c1">[<span class="pl-c1">\d.</span>]</span><span class="pl-k">+</span>)<span class="pl-pds">/</span></span>),</td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code blob-code-inner js-file-line">      android <span class="pl-k">=</span> ua.<span class="pl-c1">match</span>(<span class="pl-sr"><span class="pl-pds">/</span>(Android);<span class="pl-k">?</span><span class="pl-c1">[<span class="pl-c1">\s</span><span class="pl-cce">\/</span>]</span><span class="pl-k">+</span>(<span class="pl-c1">[<span class="pl-c1">\d.</span>]</span><span class="pl-k">+</span>)<span class="pl-k">?</span><span class="pl-pds">/</span></span>),</td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code blob-code-inner js-file-line">      osx <span class="pl-k">=</span> <span class="pl-k">!!</span>ua.<span class="pl-c1">match</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-cce">\(</span>Macintosh<span class="pl-cce">\;</span> Intel <span class="pl-pds">/</span></span>),</td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code blob-code-inner js-file-line">      ipad <span class="pl-k">=</span> ua.<span class="pl-c1">match</span>(<span class="pl-sr"><span class="pl-pds">/</span>(iPad)<span class="pl-c1">.</span><span class="pl-k">*</span>OS<span class="pl-c1">\s</span>(<span class="pl-c1">[<span class="pl-c1">\d</span>_]</span><span class="pl-k">+</span>)<span class="pl-pds">/</span></span>),</td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code blob-code-inner js-file-line">      ipod <span class="pl-k">=</span> ua.<span class="pl-c1">match</span>(<span class="pl-sr"><span class="pl-pds">/</span>(iPod)(<span class="pl-c1">.</span><span class="pl-k">*</span>OS<span class="pl-c1">\s</span>(<span class="pl-c1">[<span class="pl-c1">\d</span>_]</span><span class="pl-k">+</span>))<span class="pl-k">?</span><span class="pl-pds">/</span></span>),</td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code blob-code-inner js-file-line">      iphone <span class="pl-k">=</span> <span class="pl-k">!</span>ipad <span class="pl-k">&amp;&amp;</span> ua.<span class="pl-c1">match</span>(<span class="pl-sr"><span class="pl-pds">/</span>(iPhone<span class="pl-c1">\s</span>OS)<span class="pl-c1">\s</span>(<span class="pl-c1">[<span class="pl-c1">\d</span>_]</span><span class="pl-k">+</span>)<span class="pl-pds">/</span></span>),</td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code blob-code-inner js-file-line">      webos <span class="pl-k">=</span> ua.<span class="pl-c1">match</span>(<span class="pl-sr"><span class="pl-pds">/</span>(webOS<span class="pl-k">|</span>hpwOS)<span class="pl-c1">[<span class="pl-c1">\s</span><span class="pl-cce">\/</span>]</span>(<span class="pl-c1">[<span class="pl-c1">\d.</span>]</span><span class="pl-k">+</span>)<span class="pl-pds">/</span></span>),</td>
      </tr>
      <tr>
        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-code blob-code-inner js-file-line">      win <span class="pl-k">=</span><span class="pl-sr"> <span class="pl-pds">/</span>Win<span class="pl-c1">\d</span><span class="pl-k">{2}</span><span class="pl-k">|</span>Windows<span class="pl-pds">/</span></span>.<span class="pl-c1">test</span>(platform),</td>
      </tr>
      <tr>
        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-code blob-code-inner js-file-line">      wp <span class="pl-k">=</span> ua.<span class="pl-c1">match</span>(<span class="pl-sr"><span class="pl-pds">/</span>Windows Phone (<span class="pl-c1">[<span class="pl-c1">\d.</span>]</span><span class="pl-k">+</span>)<span class="pl-pds">/</span></span>),</td>
      </tr>
      <tr>
        <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-code blob-code-inner js-file-line">      touchpad <span class="pl-k">=</span> webos <span class="pl-k">&amp;&amp;</span> ua.<span class="pl-c1">match</span>(<span class="pl-sr"><span class="pl-pds">/</span>TouchPad<span class="pl-pds">/</span></span>),</td>
      </tr>
      <tr>
        <td id="L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-code blob-code-inner js-file-line">      kindle <span class="pl-k">=</span> ua.<span class="pl-c1">match</span>(<span class="pl-sr"><span class="pl-pds">/</span>Kindle<span class="pl-cce">\/</span>(<span class="pl-c1">[<span class="pl-c1">\d.</span>]</span><span class="pl-k">+</span>)<span class="pl-pds">/</span></span>),</td>
      </tr>
      <tr>
        <td id="L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-code blob-code-inner js-file-line">      silk <span class="pl-k">=</span> ua.<span class="pl-c1">match</span>(<span class="pl-sr"><span class="pl-pds">/</span>Silk<span class="pl-cce">\/</span>(<span class="pl-c1">[<span class="pl-c1">\d.</span>_]</span><span class="pl-k">+</span>)<span class="pl-pds">/</span></span>),</td>
      </tr>
      <tr>
        <td id="L20" class="blob-num js-line-number" data-line-number="20"></td>
        <td id="LC20" class="blob-code blob-code-inner js-file-line">      blackberry <span class="pl-k">=</span> ua.<span class="pl-c1">match</span>(<span class="pl-sr"><span class="pl-pds">/</span>(BlackBerry)<span class="pl-c1">.</span><span class="pl-k">*</span>Version<span class="pl-cce">\/</span>(<span class="pl-c1">[<span class="pl-c1">\d.</span>]</span><span class="pl-k">+</span>)<span class="pl-pds">/</span></span>),</td>
      </tr>
      <tr>
        <td id="L21" class="blob-num js-line-number" data-line-number="21"></td>
        <td id="LC21" class="blob-code blob-code-inner js-file-line">      bb10 <span class="pl-k">=</span> ua.<span class="pl-c1">match</span>(<span class="pl-sr"><span class="pl-pds">/</span>(BB10)<span class="pl-c1">.</span><span class="pl-k">*</span>Version<span class="pl-cce">\/</span>(<span class="pl-c1">[<span class="pl-c1">\d.</span>]</span><span class="pl-k">+</span>)<span class="pl-pds">/</span></span>),</td>
      </tr>
      <tr>
        <td id="L22" class="blob-num js-line-number" data-line-number="22"></td>
        <td id="LC22" class="blob-code blob-code-inner js-file-line">      rimtabletos <span class="pl-k">=</span> ua.<span class="pl-c1">match</span>(<span class="pl-sr"><span class="pl-pds">/</span>(RIM<span class="pl-c1">\s</span>Tablet<span class="pl-c1">\s</span>OS)<span class="pl-c1">\s</span>(<span class="pl-c1">[<span class="pl-c1">\d.</span>]</span><span class="pl-k">+</span>)<span class="pl-pds">/</span></span>),</td>
      </tr>
      <tr>
        <td id="L23" class="blob-num js-line-number" data-line-number="23"></td>
        <td id="LC23" class="blob-code blob-code-inner js-file-line">      playbook <span class="pl-k">=</span> ua.<span class="pl-c1">match</span>(<span class="pl-sr"><span class="pl-pds">/</span>PlayBook<span class="pl-pds">/</span></span>),</td>
      </tr>
      <tr>
        <td id="L24" class="blob-num js-line-number" data-line-number="24"></td>
        <td id="LC24" class="blob-code blob-code-inner js-file-line">      chrome <span class="pl-k">=</span> ua.<span class="pl-c1">match</span>(<span class="pl-sr"><span class="pl-pds">/</span>Chrome<span class="pl-cce">\/</span>(<span class="pl-c1">[<span class="pl-c1">\d.</span>]</span><span class="pl-k">+</span>)<span class="pl-pds">/</span></span>) <span class="pl-k">||</span> ua.<span class="pl-c1">match</span>(<span class="pl-sr"><span class="pl-pds">/</span>CriOS<span class="pl-cce">\/</span>(<span class="pl-c1">[<span class="pl-c1">\d.</span>]</span><span class="pl-k">+</span>)<span class="pl-pds">/</span></span>),</td>
      </tr>
      <tr>
        <td id="L25" class="blob-num js-line-number" data-line-number="25"></td>
        <td id="LC25" class="blob-code blob-code-inner js-file-line">      firefox <span class="pl-k">=</span> ua.<span class="pl-c1">match</span>(<span class="pl-sr"><span class="pl-pds">/</span>Firefox<span class="pl-cce">\/</span>(<span class="pl-c1">[<span class="pl-c1">\d.</span>]</span><span class="pl-k">+</span>)<span class="pl-pds">/</span></span>),</td>
      </tr>
      <tr>
        <td id="L26" class="blob-num js-line-number" data-line-number="26"></td>
        <td id="LC26" class="blob-code blob-code-inner js-file-line">      firefoxos <span class="pl-k">=</span> ua.<span class="pl-c1">match</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-cce">\(</span>(?:Mobile<span class="pl-k">|</span>Tablet); rv:(<span class="pl-c1">[<span class="pl-c1">\d.</span>]</span><span class="pl-k">+</span>)<span class="pl-cce">\)</span><span class="pl-c1">.</span><span class="pl-k">*</span>Firefox<span class="pl-cce">\/</span><span class="pl-c1">[<span class="pl-c1">\d.</span>]</span><span class="pl-k">+</span><span class="pl-pds">/</span></span>),</td>
      </tr>
      <tr>
        <td id="L27" class="blob-num js-line-number" data-line-number="27"></td>
        <td id="LC27" class="blob-code blob-code-inner js-file-line">      ie <span class="pl-k">=</span> ua.<span class="pl-c1">match</span>(<span class="pl-sr"><span class="pl-pds">/</span>MSIE<span class="pl-c1">\s</span>(<span class="pl-c1">[<span class="pl-c1">\d.</span>]</span><span class="pl-k">+</span>)<span class="pl-pds">/</span></span>) <span class="pl-k">||</span> ua.<span class="pl-c1">match</span>(<span class="pl-sr"><span class="pl-pds">/</span>Trident<span class="pl-cce">\/</span><span class="pl-c1">[<span class="pl-c1">\d</span>]</span>(?=<span class="pl-c1">[<span class="pl-k">^</span><span class="pl-cce">\?</span>]</span><span class="pl-k">+</span>)<span class="pl-c1">.</span><span class="pl-k">*</span>rv:(<span class="pl-c1">[<span class="pl-c1">0-9</span><span class="pl-c1">.</span>]</span><span class="pl-c1">.</span>)<span class="pl-pds">/</span></span>),</td>
      </tr>
      <tr>
        <td id="L28" class="blob-num js-line-number" data-line-number="28"></td>
        <td id="LC28" class="blob-code blob-code-inner js-file-line">      webview <span class="pl-k">=</span> <span class="pl-k">!</span>chrome <span class="pl-k">&amp;&amp;</span> ua.<span class="pl-c1">match</span>(<span class="pl-sr"><span class="pl-pds">/</span>(iPhone<span class="pl-k">|</span>iPod<span class="pl-k">|</span>iPad)<span class="pl-c1">.</span><span class="pl-k">*</span>AppleWebKit(?!<span class="pl-c1">.</span><span class="pl-k">*</span>Safari)<span class="pl-pds">/</span></span>),</td>
      </tr>
      <tr>
        <td id="L29" class="blob-num js-line-number" data-line-number="29"></td>
        <td id="LC29" class="blob-code blob-code-inner js-file-line">      safari <span class="pl-k">=</span> webview <span class="pl-k">||</span> ua.<span class="pl-c1">match</span>(<span class="pl-sr"><span class="pl-pds">/</span>Version<span class="pl-cce">\/</span>(<span class="pl-c1">[<span class="pl-c1">\d.</span>]</span><span class="pl-k">+</span>)(<span class="pl-c1">[<span class="pl-k">^</span>S]</span>(Safari)<span class="pl-k">|</span><span class="pl-c1">[<span class="pl-k">^</span>M]</span><span class="pl-k">*</span>(Mobile)<span class="pl-c1">[<span class="pl-k">^</span>S]</span><span class="pl-k">*</span>(Safari))<span class="pl-pds">/</span></span>)</td>
      </tr>
      <tr>
        <td id="L30" class="blob-num js-line-number" data-line-number="30"></td>
        <td id="LC30" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L31" class="blob-num js-line-number" data-line-number="31"></td>
        <td id="LC31" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">// Todo: clean this up with a better OS/browser seperation:</span></td>
      </tr>
      <tr>
        <td id="L32" class="blob-num js-line-number" data-line-number="32"></td>
        <td id="LC32" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">// - discern (more) between multiple browsers on android</span></td>
      </tr>
      <tr>
        <td id="L33" class="blob-num js-line-number" data-line-number="33"></td>
        <td id="LC33" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">// - decide if kindle fire in silk mode is android or not</span></td>
      </tr>
      <tr>
        <td id="L34" class="blob-num js-line-number" data-line-number="34"></td>
        <td id="LC34" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">// - Firefox on Android doesn&#39;t specify the Android version</span></td>
      </tr>
      <tr>
        <td id="L35" class="blob-num js-line-number" data-line-number="35"></td>
        <td id="LC35" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">// - possibly devide in os, device and browser hashes</span></td>
      </tr>
      <tr>
        <td id="L36" class="blob-num js-line-number" data-line-number="36"></td>
        <td id="LC36" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L37" class="blob-num js-line-number" data-line-number="37"></td>
        <td id="LC37" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (browser.webkit <span class="pl-k">=</span> <span class="pl-k">!!</span>webkit) browser.<span class="pl-c1">version</span> <span class="pl-k">=</span> webkit[<span class="pl-c1">1</span>]</td>
      </tr>
      <tr>
        <td id="L38" class="blob-num js-line-number" data-line-number="38"></td>
        <td id="LC38" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L39" class="blob-num js-line-number" data-line-number="39"></td>
        <td id="LC39" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (android) os.android <span class="pl-k">=</span> <span class="pl-c1">true</span>, os.<span class="pl-c1">version</span> <span class="pl-k">=</span> android[<span class="pl-c1">2</span>]</td>
      </tr>
      <tr>
        <td id="L40" class="blob-num js-line-number" data-line-number="40"></td>
        <td id="LC40" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (iphone <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span>ipod) os.ios <span class="pl-k">=</span> os.iphone <span class="pl-k">=</span> <span class="pl-c1">true</span>, os.<span class="pl-c1">version</span> <span class="pl-k">=</span> iphone[<span class="pl-c1">2</span>].<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span>_<span class="pl-pds">/</span>g</span>, <span class="pl-s"><span class="pl-pds">&#39;</span>.<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L41" class="blob-num js-line-number" data-line-number="41"></td>
        <td id="LC41" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (ipad) os.ios <span class="pl-k">=</span> os.ipad <span class="pl-k">=</span> <span class="pl-c1">true</span>, os.<span class="pl-c1">version</span> <span class="pl-k">=</span> ipad[<span class="pl-c1">2</span>].<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span>_<span class="pl-pds">/</span>g</span>, <span class="pl-s"><span class="pl-pds">&#39;</span>.<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L42" class="blob-num js-line-number" data-line-number="42"></td>
        <td id="LC42" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (ipod) os.ios <span class="pl-k">=</span> os.ipod <span class="pl-k">=</span> <span class="pl-c1">true</span>, os.<span class="pl-c1">version</span> <span class="pl-k">=</span> ipod[<span class="pl-c1">3</span>] <span class="pl-k">?</span> ipod[<span class="pl-c1">3</span>].<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span>_<span class="pl-pds">/</span>g</span>, <span class="pl-s"><span class="pl-pds">&#39;</span>.<span class="pl-pds">&#39;</span></span>) <span class="pl-k">:</span> <span class="pl-c1">null</span></td>
      </tr>
      <tr>
        <td id="L43" class="blob-num js-line-number" data-line-number="43"></td>
        <td id="LC43" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (wp) os.wp <span class="pl-k">=</span> <span class="pl-c1">true</span>, os.<span class="pl-c1">version</span> <span class="pl-k">=</span> wp[<span class="pl-c1">1</span>]</td>
      </tr>
      <tr>
        <td id="L44" class="blob-num js-line-number" data-line-number="44"></td>
        <td id="LC44" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (webos) os.webos <span class="pl-k">=</span> <span class="pl-c1">true</span>, os.<span class="pl-c1">version</span> <span class="pl-k">=</span> webos[<span class="pl-c1">2</span>]</td>
      </tr>
      <tr>
        <td id="L45" class="blob-num js-line-number" data-line-number="45"></td>
        <td id="LC45" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (touchpad) os.touchpad <span class="pl-k">=</span> <span class="pl-c1">true</span></td>
      </tr>
      <tr>
        <td id="L46" class="blob-num js-line-number" data-line-number="46"></td>
        <td id="LC46" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (blackberry) os.blackberry <span class="pl-k">=</span> <span class="pl-c1">true</span>, os.<span class="pl-c1">version</span> <span class="pl-k">=</span> blackberry[<span class="pl-c1">2</span>]</td>
      </tr>
      <tr>
        <td id="L47" class="blob-num js-line-number" data-line-number="47"></td>
        <td id="LC47" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (bb10) os.bb10 <span class="pl-k">=</span> <span class="pl-c1">true</span>, os.<span class="pl-c1">version</span> <span class="pl-k">=</span> bb10[<span class="pl-c1">2</span>]</td>
      </tr>
      <tr>
        <td id="L48" class="blob-num js-line-number" data-line-number="48"></td>
        <td id="LC48" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (rimtabletos) os.rimtabletos <span class="pl-k">=</span> <span class="pl-c1">true</span>, os.<span class="pl-c1">version</span> <span class="pl-k">=</span> rimtabletos[<span class="pl-c1">2</span>]</td>
      </tr>
      <tr>
        <td id="L49" class="blob-num js-line-number" data-line-number="49"></td>
        <td id="LC49" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (playbook) browser.playbook <span class="pl-k">=</span> <span class="pl-c1">true</span></td>
      </tr>
      <tr>
        <td id="L50" class="blob-num js-line-number" data-line-number="50"></td>
        <td id="LC50" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (kindle) os.kindle <span class="pl-k">=</span> <span class="pl-c1">true</span>, os.<span class="pl-c1">version</span> <span class="pl-k">=</span> kindle[<span class="pl-c1">1</span>]</td>
      </tr>
      <tr>
        <td id="L51" class="blob-num js-line-number" data-line-number="51"></td>
        <td id="LC51" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (silk) browser.silk <span class="pl-k">=</span> <span class="pl-c1">true</span>, browser.<span class="pl-c1">version</span> <span class="pl-k">=</span> silk[<span class="pl-c1">1</span>]</td>
      </tr>
      <tr>
        <td id="L52" class="blob-num js-line-number" data-line-number="52"></td>
        <td id="LC52" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-k">!</span>silk <span class="pl-k">&amp;&amp;</span> os.android <span class="pl-k">&amp;&amp;</span> ua.<span class="pl-c1">match</span>(<span class="pl-sr"><span class="pl-pds">/</span>Kindle Fire<span class="pl-pds">/</span></span>)) browser.silk <span class="pl-k">=</span> <span class="pl-c1">true</span></td>
      </tr>
      <tr>
        <td id="L53" class="blob-num js-line-number" data-line-number="53"></td>
        <td id="LC53" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (chrome) browser.chrome <span class="pl-k">=</span> <span class="pl-c1">true</span>, browser.<span class="pl-c1">version</span> <span class="pl-k">=</span> chrome[<span class="pl-c1">1</span>]</td>
      </tr>
      <tr>
        <td id="L54" class="blob-num js-line-number" data-line-number="54"></td>
        <td id="LC54" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (firefox) browser.firefox <span class="pl-k">=</span> <span class="pl-c1">true</span>, browser.<span class="pl-c1">version</span> <span class="pl-k">=</span> firefox[<span class="pl-c1">1</span>]</td>
      </tr>
      <tr>
        <td id="L55" class="blob-num js-line-number" data-line-number="55"></td>
        <td id="LC55" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (firefoxos) os.firefoxos <span class="pl-k">=</span> <span class="pl-c1">true</span>, os.<span class="pl-c1">version</span> <span class="pl-k">=</span> firefoxos[<span class="pl-c1">1</span>]</td>
      </tr>
      <tr>
        <td id="L56" class="blob-num js-line-number" data-line-number="56"></td>
        <td id="LC56" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (ie) browser.ie <span class="pl-k">=</span> <span class="pl-c1">true</span>, browser.<span class="pl-c1">version</span> <span class="pl-k">=</span> ie[<span class="pl-c1">1</span>]</td>
      </tr>
      <tr>
        <td id="L57" class="blob-num js-line-number" data-line-number="57"></td>
        <td id="LC57" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (safari <span class="pl-k">&amp;&amp;</span> (osx <span class="pl-k">||</span> os.ios <span class="pl-k">||</span> win)) {</td>
      </tr>
      <tr>
        <td id="L58" class="blob-num js-line-number" data-line-number="58"></td>
        <td id="LC58" class="blob-code blob-code-inner js-file-line">      browser.safari <span class="pl-k">=</span> <span class="pl-c1">true</span></td>
      </tr>
      <tr>
        <td id="L59" class="blob-num js-line-number" data-line-number="59"></td>
        <td id="LC59" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (<span class="pl-k">!</span>os.ios) browser.<span class="pl-c1">version</span> <span class="pl-k">=</span> safari[<span class="pl-c1">1</span>]</td>
      </tr>
      <tr>
        <td id="L60" class="blob-num js-line-number" data-line-number="60"></td>
        <td id="LC60" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L61" class="blob-num js-line-number" data-line-number="61"></td>
        <td id="LC61" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (webview) browser.webview <span class="pl-k">=</span> <span class="pl-c1">true</span></td>
      </tr>
      <tr>
        <td id="L62" class="blob-num js-line-number" data-line-number="62"></td>
        <td id="LC62" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L63" class="blob-num js-line-number" data-line-number="63"></td>
        <td id="LC63" class="blob-code blob-code-inner js-file-line">    os.tablet <span class="pl-k">=</span> <span class="pl-k">!!</span>(ipad <span class="pl-k">||</span> playbook <span class="pl-k">||</span> (android <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span>ua.<span class="pl-c1">match</span>(<span class="pl-sr"><span class="pl-pds">/</span>Mobile<span class="pl-pds">/</span></span>)) <span class="pl-k">||</span></td>
      </tr>
      <tr>
        <td id="L64" class="blob-num js-line-number" data-line-number="64"></td>
        <td id="LC64" class="blob-code blob-code-inner js-file-line">      (firefox <span class="pl-k">&amp;&amp;</span> ua.<span class="pl-c1">match</span>(<span class="pl-sr"><span class="pl-pds">/</span>Tablet<span class="pl-pds">/</span></span>)) <span class="pl-k">||</span> (ie <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span>ua.<span class="pl-c1">match</span>(<span class="pl-sr"><span class="pl-pds">/</span>Phone<span class="pl-pds">/</span></span>) <span class="pl-k">&amp;&amp;</span> ua.<span class="pl-c1">match</span>(<span class="pl-sr"><span class="pl-pds">/</span>Touch<span class="pl-pds">/</span></span>)))</td>
      </tr>
      <tr>
        <td id="L65" class="blob-num js-line-number" data-line-number="65"></td>
        <td id="LC65" class="blob-code blob-code-inner js-file-line">    os.phone  <span class="pl-k">=</span> <span class="pl-k">!!</span>(<span class="pl-k">!</span>os.tablet <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span>os.ipod <span class="pl-k">&amp;&amp;</span> (android <span class="pl-k">||</span> iphone <span class="pl-k">||</span> webos <span class="pl-k">||</span> blackberry <span class="pl-k">||</span> bb10 <span class="pl-k">||</span></td>
      </tr>
      <tr>
        <td id="L66" class="blob-num js-line-number" data-line-number="66"></td>
        <td id="LC66" class="blob-code blob-code-inner js-file-line">      (chrome <span class="pl-k">&amp;&amp;</span> ua.<span class="pl-c1">match</span>(<span class="pl-sr"><span class="pl-pds">/</span>Android<span class="pl-pds">/</span></span>)) <span class="pl-k">||</span> (chrome <span class="pl-k">&amp;&amp;</span> ua.<span class="pl-c1">match</span>(<span class="pl-sr"><span class="pl-pds">/</span>CriOS<span class="pl-cce">\/</span>(<span class="pl-c1">[<span class="pl-c1">\d.</span>]</span><span class="pl-k">+</span>)<span class="pl-pds">/</span></span>)) <span class="pl-k">||</span></td>
      </tr>
      <tr>
        <td id="L67" class="blob-num js-line-number" data-line-number="67"></td>
        <td id="LC67" class="blob-code blob-code-inner js-file-line">      (firefox <span class="pl-k">&amp;&amp;</span> ua.<span class="pl-c1">match</span>(<span class="pl-sr"><span class="pl-pds">/</span>Mobile<span class="pl-pds">/</span></span>)) <span class="pl-k">||</span> (ie <span class="pl-k">&amp;&amp;</span> ua.<span class="pl-c1">match</span>(<span class="pl-sr"><span class="pl-pds">/</span>Touch<span class="pl-pds">/</span></span>))))</td>
      </tr>
      <tr>
        <td id="L68" class="blob-num js-line-number" data-line-number="68"></td>
        <td id="LC68" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L69" class="blob-num js-line-number" data-line-number="69"></td>
        <td id="LC69" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L70" class="blob-num js-line-number" data-line-number="70"></td>
        <td id="LC70" class="blob-code blob-code-inner js-file-line">  detect.<span class="pl-c1">call</span>($, <span class="pl-c1">navigator</span>.<span class="pl-c1">userAgent</span>, <span class="pl-c1">navigator</span>.<span class="pl-c1">platform</span>)</td>
      </tr>
      <tr>
        <td id="L71" class="blob-num js-line-number" data-line-number="71"></td>
        <td id="LC71" class="blob-code blob-code-inner js-file-line">  <span class="pl-c">// make available to unit tests</span></td>
      </tr>
      <tr>
        <td id="L72" class="blob-num js-line-number" data-line-number="72"></td>
        <td id="LC72" class="blob-code blob-code-inner js-file-line">  $.__detect <span class="pl-k">=</span> detect</td>
      </tr>
      <tr>
        <td id="L73" class="blob-num js-line-number" data-line-number="73"></td>
        <td id="LC73" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L74" class="blob-num js-line-number" data-line-number="74"></td>
        <td id="LC74" class="blob-code blob-code-inner js-file-line">})(Zepto)</td>
      </tr>
</table>

  </div>

</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" action="" class="js-jump-to-line-form" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="btn">Go</button>
</form></div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links right">
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
      <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>

    </ul>

    <a href="https://github.com" aria-label="Homepage">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
</a>
    <ul class="site-footer-links">
      <li>&copy; 2015 <span title="0.03096s from github-fe136-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact</a></li>
    </ul>
  </div>
</div>


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-suggester-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="fullscreen-contents js-fullscreen-contents" placeholder=""></textarea>
      <div class="suggester-container">
        <div class="suggester fullscreen-suggester js-suggester js-navigation-container"></div>
      </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped tooltipped-w" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped tooltipped-w"
      aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    
    

    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-x flash-close js-ajax-error-dismiss" aria-label="Dismiss error"></a>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/frameworks-2c8ae50712a47d2b83d740cb875d55cdbbb3fdbccf303951cc6b7e63731e0c38.js"></script>
      <script async="async" crossorigin="anonymous" src="https://assets-cdn.github.com/assets/github-747277110ee545263834c3918a562a2dc155e610ea48c5808df3838c3325cd60.js"></script>
      
      


  </body>
</html>

