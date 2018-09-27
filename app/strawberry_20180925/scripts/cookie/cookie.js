



<!DOCTYPE html>
<html lang="en" class=" is-copy-enabled is-u2f-enabled">
  <head>
    <meta charset='utf-8'>
    

    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/frameworks-98550932b9f11a849da143d2dbc9dfaa977a17656514d323ae9ce0d6fa688b60.css" integrity="sha256-mFUJMrnxGoSdoUPS28nfqpd6F2VlFNMjrpzg1vpoi2A=" media="all" rel="stylesheet" />
    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github-30145e41cc04c40aa07e2619110dc5190c5310e3466a5d017650944164ae62d5.css" integrity="sha256-MBReQcwExAqgfiYZEQ3FGQxTEONGal0BdlCUQWSuYtU=" media="all" rel="stylesheet" />
    
    
    
    

    <link as="script" href="https://assets-cdn.github.com/assets/frameworks-88471af1fec40ff9418efbe2ddd15b6896af8d772f8179004c254dffc25ea490.js" rel="preload" />
    
    <link as="script" href="https://assets-cdn.github.com/assets/github-0d5e8524b2ed9deeb806fa74be22728d16cda14caa657d2c158fc762c0ee47af.js" rel="preload" />

    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    <meta name="viewport" content="width=device-width">
    
    <title>florian/cookie.js: A tiny JavaScript library that simplifies cookies.</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" href="/apple-touch-icon.png">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="/apple-touch-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon-180x180.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="https://avatars3.githubusercontent.com/u/1564556?v=3&amp;s=400" name="twitter:image:src" /><meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="florian/cookie.js" name="twitter:title" /><meta content="cookie.js - A tiny JavaScript library that simplifies cookies." name="twitter:description" />
      <meta content="https://avatars3.githubusercontent.com/u/1564556?v=3&amp;s=400" property="og:image" /><meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="florian/cookie.js" property="og:title" /><meta content="https://github.com/florian/cookie.js" property="og:url" /><meta content="cookie.js - A tiny JavaScript library that simplifies cookies." property="og:description" />
      <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">
    <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">
    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="web-socket" href="wss://live.github.com/_sockets/MTg2NDA5MTA6MWQ5MzBhNDhjNTJjYjQyZDFkZjFjN2QyZWExMzY2NTg6ZGJhNzk4YTQ5NWE4YzNiOTM5YzVhYWJkMTQ1OGY0ZGNlNDAxYTllNTIzNzgzM2FlMzk5NTcxZTdlZjUyNDA5Yg==--e89adf345bd2e24394a1ff8fc23f2fe1062247cf">
    <meta name="pjax-timeout" content="1000">
    <link rel="sudo-modal" href="/sessions/sudo_modal">
    <meta name="request-id" content="8657AFD5:1B46:329D85:57D0BB09" data-pjax-transient>

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>

    <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
<meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
    <meta name="google-analytics" content="UA-3769691-2">

<meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="8657AFD5:1B46:329D85:57D0BB09" name="octolytics-dimension-request_id" /><meta content="18640910" name="octolytics-actor-id" /><meta content="arkadi81" name="octolytics-actor-login" /><meta content="838552c72f8133b8d28f87d5f0294160d6255a769688874405dff665fbdc411c" name="octolytics-actor-hash" />
<meta content="/&lt;user-name&gt;/&lt;repo-name&gt;" data-pjax-transient="true" name="analytics-location" />



  <meta class="js-ga-set" name="dimension1" content="Logged In">



        <meta name="hostname" content="github.com">
    <meta name="user-login" content="arkadi81">

        <meta name="expected-hostname" content="github.com">
      <meta name="js-proxy-site-detection-payload" content="YWNjM2ExZDI5NTYwNDFiOTgxODk1YWM3NzAxMTkwNDMzNTI1MTg2NWZjMWEyMjM5N2U2NWQwMmRiMzk5ZjE2Y3x7InJlbW90ZV9hZGRyZXNzIjoiMTM0Ljg3LjE3NS4yMTMiLCJyZXF1ZXN0X2lkIjoiODY1N0FGRDU6MUI0NjozMjlEODU6NTdEMEJCMDkiLCJ0aW1lc3RhbXAiOjE0NzMyOTcxNjF9">


      <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#4078c0">
      <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">

    <meta name="html-safe-nonce" content="e9073ad3c049626e8e3e219e0e7fcde5539be260">
    <meta content="a4da3a02c6654800ac127688b4ffa081bbe3a13d" name="form-nonce" />

    <meta http-equiv="x-pjax-version" content="ca5ecdeed55e41ac1282e57804f30658">
    

      
  <meta name="description" content="cookie.js - A tiny JavaScript library that simplifies cookies.">
  <meta name="go-import" content="github.com/florian/cookie.js git https://github.com/florian/cookie.js.git">

  <meta content="1564556" name="octolytics-dimension-user_id" /><meta content="florian" name="octolytics-dimension-user_login" /><meta content="3798570" name="octolytics-dimension-repository_id" /><meta content="florian/cookie.js" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="3798570" name="octolytics-dimension-repository_network_root_id" /><meta content="florian/cookie.js" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/florian/cookie.js/commits/master.atom" rel="alternate" title="Recent Commits to cookie.js:master" type="application/atom+xml">


      <link rel="canonical" href="https://github.com/florian/cookie.js" data-pjax-transient>
  </head>


  <body class="logged-in  env-production windows vis-public">
    <div id="js-pjax-loader-bar" class="pjax-loader-bar"><div class="progress"></div></div>
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>

    
    
    



        <div class="header header-logged-in true" role="banner">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/" data-hotkey="g d" aria-label="Homepage" data-ga-click="Header, go to dashboard, icon:logo">
  <svg aria-hidden="true" class="octicon octicon-mark-github" height="28" version="1.1" viewBox="0 0 16 16" width="28"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
</a>


        <div class="header-search scoped-search site-scoped-search js-site-search" role="search">
  <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/florian/cookie.js/search" class="js-site-search-form" data-scoped-search-url="/florian/cookie.js/search" data-unscoped-search-url="/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <label class="form-control header-search-wrapper js-chromeless-input-container">
      <div class="header-search-scope">This repository</div>
      <input type="text"
        class="form-control header-search-input js-site-search-focus js-site-search-field is-clearable"
        data-hotkey="s"
        name="q"
        placeholder="Search"
        aria-label="Search this repository"
        data-unscoped-placeholder="Search GitHub"
        data-scoped-placeholder="Search"
        autocapitalize="off">
    </label>
</form></div>


      <ul class="header-nav float-left" role="navigation">
        <li class="header-nav-item">
          <a href="/pulls" aria-label="Pull requests you created" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:pulls context:user" data-hotkey="g p" data-selected-links="/pulls /pulls/assigned /pulls/mentioned /pulls">
            Pull requests
</a>        </li>
        <li class="header-nav-item">
          <a href="/issues" aria-label="Issues you created" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:issues context:user" data-hotkey="g i" data-selected-links="/issues /issues/assigned /issues/mentioned /issues">
            Issues
</a>        </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://gist.github.com/" data-ga-click="Header, go to gist, text:gist">Gist</a>
          </li>
      </ul>

    
<ul class="header-nav user-nav float-right" id="user-links">
  <li class="header-nav-item">
    

  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link tooltipped tooltipped-s js-menu-target" href="/new"
       aria-label="Create new…"
       data-ga-click="Header, create new, icon:add">
      <svg aria-hidden="true" class="octicon octicon-plus float-left" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 9H7v5H5V9H0V7h5V2h2v5h5z"></path></svg>
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <ul class="dropdown-menu dropdown-menu-sw">
        
<a class="dropdown-item" href="/new" data-ga-click="Header, create new repository">
  New repository
</a>

  <a class="dropdown-item" href="/new/import" data-ga-click="Header, import a repository">
    Import repository
  </a>


  <a class="dropdown-item" href="/organizations/new" data-ga-click="Header, create new organization">
    New organization
  </a>



  <div class="dropdown-divider"></div>
  <div class="dropdown-header">
    <span title="florian/cookie.js">This repository</span>
  </div>
    <a class="dropdown-item" href="/florian/cookie.js/issues/new" data-ga-click="Header, create new issue">
      New issue
    </a>

      </ul>
    </div>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link name tooltipped tooltipped-sw js-menu-target" href="/arkadi81"
       aria-label="View profile and more"
       data-ga-click="Header, show menu, icon:avatar">
      <img alt="@arkadi81" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/18640910?v=3&amp;s=40" width="20" />
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <div class="dropdown-menu dropdown-menu-sw">
        <div class="dropdown-header header-nav-current-user css-truncate">
          Signed in as <strong class="css-truncate-target">arkadi81</strong>
        </div>

        <div class="dropdown-divider"></div>

        <a class="dropdown-item" href="/arkadi81" data-ga-click="Header, go to profile, text:your profile">
          Your profile
        </a>
          <a class="dropdown-item" href="/stars" data-ga-click="Header, go to starred repos, text:your stars">
            Your stars
          </a>
        <a class="dropdown-item" href="/explore" data-ga-click="Header, go to explore, text:explore">
          Explore
        </a>
          <a class="dropdown-item" href="/integrations" data-ga-click="Header, go to integrations, text:integrations">
            Integrations
          </a>
        <a class="dropdown-item" href="https://help.github.com" data-ga-click="Header, go to help, text:help">
          Help
        </a>


        <div class="dropdown-divider"></div>

        <a class="dropdown-item" href="/settings/profile" data-ga-click="Header, go to settings, icon:settings">
          Settings
        </a>

        <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/logout" class="logout-form" data-form-nonce="a4da3a02c6654800ac127688b4ffa081bbe3a13d" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="835SKOaSE67mMh5HUulUxedyPzx/mHcVS/KKiDTvwijRpBeWi+m1pau+srGnZYtrNH5soMHF1jsRkXkdso3g1Q==" /></div>
          <button class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout">
            Sign out
          </button>
</form>      </div>
    </div>
  </li>
</ul>


    
  </div>
</div>


      


    <div id="start-of-content" class="accessibility-aid"></div>

      <div id="js-flash-container">
</div>


    <div role="main">
        <div itemscope itemtype="http://schema.org/SoftwareSourceCode">
    <div id="js-repo-pjax-container" data-pjax-container>
      
<div class="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav">
  <div class="container repohead-details-container">

    

<ul class="pagehead-actions">

  <li>
        <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-form-nonce="a4da3a02c6654800ac127688b4ffa081bbe3a13d" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="A2o/41yvUZVv2GI6cbIQhjH8zsxn2GeXHJKD4B+s6hdKj08gwcTLOobqvsE8YKokRr+zKMjih2irWkgp7HEc1A==" /></div>      <input class="form-control" id="repository_id" name="repository_id" type="hidden" value="3798570" />

        <div class="select-menu js-menu-container js-select-menu">
          <a href="/florian/cookie.js/subscription"
            class="btn btn-sm btn-with-count select-menu-button js-menu-target" role="button" tabindex="0" aria-haspopup="true"
            data-ga-click="Repository, click Watch settings, action:files#disambiguate">
            <span class="js-select-button">
              <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"></path></svg>
              Watch
            </span>
          </a>
          <a class="social-count js-social-count"
            href="/florian/cookie.js/watchers"
            aria-label="44 users are watching this repository">
            44
          </a>

        <div class="select-menu-modal-holder">
          <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
            <div class="select-menu-header js-navigation-enable" tabindex="-1">
              <svg aria-label="Close" class="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"></path></svg>
              <span class="select-menu-title">Notifications</span>
            </div>

              <div class="select-menu-list js-navigation-container" role="menu">

                <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
                  <div class="select-menu-item-text">
                    <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                    <span class="select-menu-item-heading">Not watching</span>
                    <span class="description">Be notified when participating or @mentioned.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"></path></svg>
                      Watch
                    </span>
                  </div>
                </div>

                <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
                  <div class="select-menu-item-text">
                    <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                    <span class="select-menu-item-heading">Watching</span>
                    <span class="description">Be notified of all conversations.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"></path></svg>
                      Unwatch
                    </span>
                  </div>
                </div>

                <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
                  <div class="select-menu-item-text">
                    <input id="do_ignore" name="do" type="radio" value="ignore" />
                    <span class="select-menu-item-heading">Ignoring</span>
                    <span class="description">Never be notified.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-mute" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8 2.81v10.38c0 .67-.81 1-1.28.53L3 10H1c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h2l3.72-3.72C7.19 1.81 8 2.14 8 2.81zm7.53 3.22l-1.06-1.06-1.97 1.97-1.97-1.97-1.06 1.06L11.44 8 9.47 9.97l1.06 1.06 1.97-1.97 1.97 1.97 1.06-1.06L13.56 8l1.97-1.97z"></path></svg>
                      Stop ignoring
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
</form>
  </li>

  <li>
    
  <div class="js-toggler-container js-social-container starring-container ">

    <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/florian/cookie.js/unstar" class="starred" data-form-nonce="a4da3a02c6654800ac127688b4ffa081bbe3a13d" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="Fani3/GrQOW2iwLNf7l2Rsw6xfL96a+4rbREo3ykPRfhpM6eyfd7UNKRhWKdmwAClDCVFC9y+SbM7g4i/21euA==" /></div>
      <button
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Unstar this repository" title="Unstar florian/cookie.js"
        data-ga-click="Repository, click unstar button, action:files#disambiguate; text:Unstar">
        <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"></path></svg>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/florian/cookie.js/stargazers"
           aria-label="862 users starred this repository">
          862
        </a>
</form>
    <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/florian/cookie.js/star" class="unstarred" data-form-nonce="a4da3a02c6654800ac127688b4ffa081bbe3a13d" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="i/ek6cdzipMWxQ/YHOd5kUoooi/B1vFE9aiWZ+Irt7XPRQ9NGy7H5p9c3WzwdcX5IojIIKaGq4f79qS2MagsHg==" /></div>
      <button
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Star this repository" title="Star florian/cookie.js"
        data-ga-click="Repository, click star button, action:files#disambiguate; text:Star">
        <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"></path></svg>
        Star
      </button>
        <a class="social-count js-social-count" href="/florian/cookie.js/stargazers"
           aria-label="862 users starred this repository">
          862
        </a>
</form>  </div>

  </li>

  <li>
          <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/florian/cookie.js/fork" class="btn-with-count" data-form-nonce="a4da3a02c6654800ac127688b4ffa081bbe3a13d" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="PglA4GObAqxHz4KptdtcpleHe+0slP6glrAvljy53Fib/THEz5nN8PNo1tGN1dOkGsGzqNIVizncWUrPQ6z4tQ==" /></div>
            <button
                type="submit"
                class="btn btn-sm btn-with-count"
                data-ga-click="Repository, show fork modal, action:files#disambiguate; text:Fork"
                title="Fork your own copy of florian/cookie.js to your account"
                aria-label="Fork your own copy of florian/cookie.js to your account">
              <svg aria-hidden="true" class="octicon octicon-repo-forked" height="16" version="1.1" viewBox="0 0 10 16" width="10"><path d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path></svg>
              Fork
            </button>
</form>
    <a href="/florian/cookie.js/network" class="social-count"
       aria-label="151 users are forked this repository">
      151
    </a>
  </li>
</ul>

    <h1 class="public ">
  <svg aria-hidden="true" class="octicon octicon-repo" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"></path></svg>
  <span class="author" itemprop="author"><a href="/florian" class="url fn" rel="author">florian</a></span><!--
--><span class="path-divider">/</span><!--
--><strong itemprop="name"><a href="/florian/cookie.js" data-pjax="#js-repo-pjax-container">cookie.js</a></strong>

</h1>

  </div>
  <div class="container">
    
<nav class="reponav js-repo-nav js-sidenav-container-pjax"
     itemscope
     itemtype="http://schema.org/BreadcrumbList"
     role="navigation"
     data-pjax="#js-repo-pjax-container">

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/florian/cookie.js" aria-selected="true" class="js-selected-navigation-item selected reponav-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /florian/cookie.js" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-code" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"></path></svg>
      <span itemprop="name">Code</span>
      <meta itemprop="position" content="1">
</a>  </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a href="/florian/cookie.js/issues" class="js-selected-navigation-item reponav-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /florian/cookie.js/issues" itemprop="url">
        <svg aria-hidden="true" class="octicon octicon-issue-opened" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"></path></svg>
        <span itemprop="name">Issues</span>
        <span class="counter">0</span>
        <meta itemprop="position" content="2">
</a>    </span>

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/florian/cookie.js/pulls" class="js-selected-navigation-item reponav-item" data-hotkey="g p" data-selected-links="repo_pulls /florian/cookie.js/pulls" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-git-pull-request" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path></svg>
      <span itemprop="name">Pull requests</span>
      <span class="counter">1</span>
      <meta itemprop="position" content="3">
</a>  </span>


    <a href="/florian/cookie.js/wiki" class="js-selected-navigation-item reponav-item" data-hotkey="g w" data-selected-links="repo_wiki /florian/cookie.js/wiki">
      <svg aria-hidden="true" class="octicon octicon-book" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M3 5h4v1H3V5zm0 3h4V7H3v1zm0 2h4V9H3v1zm11-5h-4v1h4V5zm0 2h-4v1h4V7zm0 2h-4v1h4V9zm2-6v9c0 .55-.45 1-1 1H9.5l-1 1-1-1H2c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h5.5l1 1 1-1H15c.55 0 1 .45 1 1zm-8 .5L7.5 3H2v9h6V3.5zm7-.5H9.5l-.5.5V12h6V3z"></path></svg>
      Wiki
</a>

  <a href="/florian/cookie.js/pulse" class="js-selected-navigation-item reponav-item" data-selected-links="pulse /florian/cookie.js/pulse">
    <svg aria-hidden="true" class="octicon octicon-pulse" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M11.5 8L8.8 5.4 6.6 8.5 5.5 1.6 2.38 8H0v2h3.6l.9-1.8.9 5.4L9 8.5l1.6 1.5H14V8z"></path></svg>
    Pulse
</a>
  <a href="/florian/cookie.js/graphs" class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors /florian/cookie.js/graphs">
    <svg aria-hidden="true" class="octicon octicon-graph" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z"></path></svg>
    Graphs
</a>

</nav>

  </div>
</div>

<div class="container new-discussion-timeline experiment-repo-nav">
  <div class="repository-content">

    
<div class="repository-meta js-details-container">
  <span class="repository-meta-content">
        <span itemprop="about"> A tiny JavaScript library that simplifies cookies.</span>
  </span>

</div>


<div class="overall-summary overall-summary-bottomless">
  <div class="stats-switcher-viewport js-stats-switcher-viewport">
    <div class="stats-switcher-wrapper">
    <ul class="numbers-summary">
      <li class="commits">
        <a data-pjax href="/florian/cookie.js/commits/master">
            <svg aria-hidden="true" class="octicon octicon-history" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M8 13H6V6h5v2H8v5zM7 1C4.81 1 2.87 2.02 1.59 3.59L0 2v4h4L2.5 4.5C3.55 3.17 5.17 2.3 7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-.34.03-.67.09-1H.08C.03 7.33 0 7.66 0 8c0 3.86 3.14 7 7 7s7-3.14 7-7-3.14-7-7-7z"></path></svg>
            <span class="num text-emphasized">
              196
            </span>
            commits
        </a>
      </li>
      <li>
        <a data-pjax href="/florian/cookie.js/branches">
          <svg aria-hidden="true" class="octicon octicon-git-branch" height="16" version="1.1" viewBox="0 0 10 16" width="10"><path d="M10 5c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v.3c-.02.52-.23.98-.63 1.38-.4.4-.86.61-1.38.63-.83.02-1.48.16-2 .45V4.72a1.993 1.993 0 0 0-1-3.72C.88 1 0 1.89 0 3a2 2 0 0 0 1 1.72v6.56c-.59.35-1 .99-1 1.72 0 1.11.89 2 2 2 1.11 0 2-.89 2-2 0-.53-.2-1-.53-1.36.09-.06.48-.41.59-.47.25-.11.56-.17.94-.17 1.05-.05 1.95-.45 2.75-1.25S8.95 7.77 9 6.73h-.02C9.59 6.37 10 5.73 10 5zM2 1.8c.66 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2C1.35 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2zm0 12.41c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm6-8c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path></svg>
          <span class="num text-emphasized">
            1
          </span>
          branch
        </a>
      </li>

      <li>
        <a data-pjax href="/florian/cookie.js/releases">
          <svg aria-hidden="true" class="octicon octicon-tag" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M7.73 1.73C7.26 1.26 6.62 1 5.96 1H3.5C2.13 1 1 2.13 1 3.5v2.47c0 .66.27 1.3.73 1.77l6.06 6.06c.39.39 1.02.39 1.41 0l4.59-4.59a.996.996 0 0 0 0-1.41L7.73 1.73zM2.38 7.09c-.31-.3-.47-.7-.47-1.13V3.5c0-.88.72-1.59 1.59-1.59h2.47c.42 0 .83.16 1.13.47l6.14 6.13-4.73 4.73-6.13-6.15zM3.01 3h2v2H3V3h.01z"></path></svg>
          <span class="num text-emphasized">
            4
          </span>
          releases
        </a>
      </li>

      <li>
          <a href="/florian/cookie.js/graphs/contributors">
  <svg aria-hidden="true" class="octicon octicon-organization" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M16 12.999c0 .439-.45 1-1 1H7.995c-.539 0-.994-.447-.995-.999H1c-.54 0-1-.561-1-1 0-2.634 3-4 3-4s.229-.409 0-1c-.841-.621-1.058-.59-1-3 .058-2.419 1.367-3 2.5-3s2.442.58 2.5 3c.058 2.41-.159 2.379-1 3-.229.59 0 1 0 1s1.549.711 2.42 2.088C9.196 9.369 10 8.999 10 8.999s.229-.409 0-1c-.841-.62-1.058-.59-1-3 .058-2.419 1.367-3 2.5-3s2.437.581 2.495 3c.059 2.41-.158 2.38-1 3-.229.59 0 1 0 1s3.005 1.366 3.005 4"></path></svg>
    <span class="num text-emphasized">
      6
    </span>
    contributors
</a>

      </li>
    </ul>

      <div class="repository-lang-stats">
        <ol class="repository-lang-stats-numbers">
          <li>
              <a href="/florian/cookie.js/search?l=javascript"  data-ga-click="Repository, language stats search click, location:repo overview">
                <span class="color-block language-color" style="background-color:#f1e05a;"></span>
                <span class="lang">JavaScript</span>
                <span class="percent">96.5%</span>
              </a>
          </li>
          <li>
              <a href="/florian/cookie.js/search?l=html"  data-ga-click="Repository, language stats search click, location:repo overview">
                <span class="color-block language-color" style="background-color:#e44b23;"></span>
                <span class="lang">HTML</span>
                <span class="percent">3.5%</span>
              </a>
          </li>
        </ol>
      </div>
    </div>
  </div>
</div>

  <div class="repository-lang-stats-graph js-toggle-lang-stats" title="Click for language details" data-ga-click="Repository, language bar stats toggle, location:repo overview">
    <span class="language-color" aria-label="JavaScript 96.5%" style="width:96.5%; background-color:#f1e05a;" itemprop="keywords">JavaScript</span>
    <span class="language-color" aria-label="HTML 3.5%" style="width:3.5%; background-color:#e44b23;" itemprop="keywords">HTML</span>
  </div>

  <include-fragment src="/florian/cookie.js/show_partial?partial=tree%2Frecently_touched_branches_list"></include-fragment>

<div class="file-navigation in-mid-page">

    <div class="select-menu get-repo-select-menu js-menu-container float-right select-menu-modal-right">
  <button class="btn btn-sm btn-primary select-menu-button js-menu-target"
    title="Clone or download this repository"
    type="button" aria-label="Clone or download this repository" tabindex="0" aria-haspopup="true">
    <span>Clone or download</span>
  </button>

  <div class="select-menu-modal-holder dropdown-menu-content js-menu-content" aria-hidden="true">
    <div class="get-repo-modal dropdown-menu dropdown-menu-sw pb-0 js-toggler-container ">
      <div class="clone-options https-clone-options">
          <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone" data-form-nonce="a4da3a02c6654800ac127688b4ffa081bbe3a13d" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="4oh1CTjY8cuQNHJkOviYkmUWOFpPVnts6yB8myyCvUWbKZs9r9VNknspqKL6jJOFgUlK4asprG8X4fBQrE+xMQ==" /></div><button class="btn-link btn-change-protocol js-toggler-target float-right" type="submit">Use SSH</button></form>

        <h4 class="mb-1">
          Clone with HTTPS
          <a class="muted-link" href="https://help.github.com/articles/which-remote-url-should-i-use" target="_blank">
            <svg aria-hidden="true" class="octicon octicon-question" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M6 10h2v2H6v-2zm4-3.5C10 8.64 8 9 8 9H6c0-.55.45-1 1-1h.5c.28 0 .5-.22.5-.5v-1c0-.28-.22-.5-.5-.5h-1c-.28 0-.5.22-.5.5V7H4c0-1.5 1.5-3 3-3s3 1 3 2.5zM7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7z"></path></svg>
          </a>
        </h4>
        <p class="mb-2 get-repo-decription-text">
          Use Git or checkout with SVN using the web URL.
        </p>

        <div class="input-group js-zeroclipboard-container">
  <input type="text" class="form-control input-monospace input-sm js-zeroclipboard-target js-url-field" value="https://github.com/florian/cookie.js.git" aria-label="Clone this repository at https://github.com/florian/cookie.js.git" readonly>
  <div class="input-group-button">
    <button aria-label="Copy to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><svg aria-hidden="true" class="octicon octicon-clippy" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M2 13h4v1H2v-1zm5-6H2v1h5V7zm2 3V8l-3 3 3 3v-2h5v-2H9zM4.5 9H2v1h2.5V9zM2 12h2.5v-1H2v1zm9 1h1v2c-.02.28-.11.52-.3.7-.19.18-.42.28-.7.3H1c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h3c0-1.11.89-2 2-2 1.11 0 2 .89 2 2h3c.55 0 1 .45 1 1v5h-1V6H1v9h10v-2zM2 5h8c0-.55-.45-1-1-1H8c-.55 0-1-.45-1-1s-.45-1-1-1-1 .45-1 1-.45 1-1 1H3c-.55 0-1 .45-1 1z"></path></svg></button>
  </div>
</div>

      </div>

        <div class="clone-options ssh-clone-options">
          <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/users/set_protocol?protocol_selector=https&amp;protocol_type=clone" data-form-nonce="a4da3a02c6654800ac127688b4ffa081bbe3a13d" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="FQoHMTCbGwFFGLiQka6rchj48vt9vdw9sJmwiAdTMNeFw+NplSbx+i4T6P+HqvD7oeL/EmV4XoyJ2CgFpro+Qg==" /></div><button class="btn-link btn-change-protocol js-toggler-target float-right" type="submit">Use HTTPS</button></form>

          <h4 class="mb-1">
            Clone with SSH
            <a class="muted-link" href="https://help.github.com/articles/which-remote-url-should-i-use" target="_blank">
              <svg aria-hidden="true" class="octicon octicon-question" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M6 10h2v2H6v-2zm4-3.5C10 8.64 8 9 8 9H6c0-.55.45-1 1-1h.5c.28 0 .5-.22.5-.5v-1c0-.28-.22-.5-.5-.5h-1c-.28 0-.5.22-.5.5V7H4c0-1.5 1.5-3 3-3s3 1 3 2.5zM7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7z"></path></svg>
            </a>
          </h4>
          <p class="mb-2 get-repo-decription-text">
            Use an SSH key and passphrase from account.
          </p>

          <div class="input-group js-zeroclipboard-container">
  <input type="text" class="form-control input-monospace input-sm js-zeroclipboard-target js-url-field" value="git@github.com:florian/cookie.js.git" aria-label="Clone this repository at git@github.com:florian/cookie.js.git" readonly>
  <div class="input-group-button">
    <button aria-label="Copy to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><svg aria-hidden="true" class="octicon octicon-clippy" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M2 13h4v1H2v-1zm5-6H2v1h5V7zm2 3V8l-3 3 3 3v-2h5v-2H9zM4.5 9H2v1h2.5V9zM2 12h2.5v-1H2v1zm9 1h1v2c-.02.28-.11.52-.3.7-.19.18-.42.28-.7.3H1c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h3c0-1.11.89-2 2-2 1.11 0 2 .89 2 2h3c.55 0 1 .45 1 1v5h-1V6H1v9h10v-2zM2 5h8c0-.55-.45-1-1-1H8c-.55 0-1-.45-1-1s-.45-1-1-1-1 .45-1 1-.45 1-1 1H3c-.55 0-1 .45-1 1z"></path></svg></button>
  </div>
</div>

        </div>

      <div class="mt-2">
          <a href="https://windows.github.com" class="btn btn-outline get-repo-btn tooltipped tooltipped-s tooltipped-multiline" aria-label="Clone florian/cookie.js to your computer and use it in GitHub Desktop.">
    Open in Desktop
  </a>

<a href="/florian/cookie.js/archive/master.zip"
   class="btn btn-outline get-repo-btn
"
   rel="nofollow"
   data-ga-click="Repository, download zip, location:repo overview">
  Download ZIP
</a>

      </div>
    </div>
  </div>
</div>


  <div class="btn-group float-right">
      
  <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/florian/cookie.js/new/master" class="btn-group-form" data-form-nonce="a4da3a02c6654800ac127688b4ffa081bbe3a13d" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="vNhUvBKBm98ZwC6snHgv7WD9tMvBJmsM0zpkDSn7zxHMmMlPJN8CybkFDzkBKSENOZNdh+dVxABnv4ewRWdavg==" /></div>
    <button class="btn btn-sm" type="submit" data-disable-with="Creating file…">
      Create new file
    </button>
</form>

      
  <a href="/florian/cookie.js/upload/master" class="btn btn-sm">
    Upload files
  </a>


    <a href="/florian/cookie.js/find/master"
      class="btn btn-sm empty-icon float-right"
      data-pjax
      data-hotkey="t"
      data-ga-click="Repository, find file, location:repo overview">
      Find file
    </a>
  </div>

  
<div class="select-menu branch-select-menu js-menu-container js-select-menu float-left">
  <button class="btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    
    type="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <i>Branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </button>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <svg aria-label="Close" class="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"></path></svg>
        <span class="select-menu-title">Switch branches/tags</span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="form-control js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab" role="tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab" role="tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches" role="menu">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/florian/cookie.js/tree/master"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                master
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/florian/cookie.js/tree/v1.2.0"
              data-name="v1.2.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.2.0">
                v1.2.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/florian/cookie.js/tree/v1.1.1"
              data-name="v1.1.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.1.1">
                v1.1.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/florian/cookie.js/tree/v1.1.0"
              data-name="v1.1.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.1.0">
                v1.1.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/florian/cookie.js/tree/v1.0.0"
              data-name="v1.0.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.0">
                v1.0.0
              </span>
            </a>
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>


      <a href="/florian/cookie.js/pull/new/master" class="btn btn-sm new-pull-request-btn" data-pjax data-ga-click="Repository, new pull request, location:repo overview">
        New pull request
      </a>

  <div class="breadcrumb">
    
  </div>
</div>





  <div class="commit-tease js-details-container">
    <span class="float-right">
      Latest commit
      <a class="commit-tease-sha" href="/florian/cookie.js/commit/9fee9b3ce62a2572fdd240f6d72feb12e064ca13" data-pjax>
        9fee9b3
      </a>
      <span itemprop="dateModified"><relative-time datetime="2016-06-16T21:30:25Z">Jun 16, 2016</relative-time></span>
    </span>


    <span class="commit-author-section">
      <img alt="@florian" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/1564556?v=3&amp;s=40" width="20" />
      <a href="/florian" class="user-mention" rel="author">florian</a>
        committed on <strong>GitHub</strong>
    </span>

        <a href="/florian/cookie.js/commit/9fee9b3ce62a2572fdd240f6d72feb12e064ca13" class="message" data-pjax="true" title="Merge pull request #38 from littleguga/patch-1

fix typo">Merge pull request</a> <a href="https://github.com/florian/cookie.js/pull/38" class="issue-link js-issue-link" data-url="https://github.com/florian/cookie.js/issues/38" data-id="160759190" data-error-text="Failed to load issue title" data-permission-text="Issue title is private">#38</a> <a href="/florian/cookie.js/commit/9fee9b3ce62a2572fdd240f6d72feb12e064ca13" class="message" data-pjax="true" title="Merge pull request #38 from littleguga/patch-1

fix typo">from littleguga/patch-1</a>
          <span class="hidden-text-expander inline">
            <button type="button" class="ellipsis-expander js-details-target">&hellip;</button>
          </span>
    </span>

      <div class="commit-desc"><pre class="text-small">fix typo</pre></div>
  </div>


<div class="file-wrap">

  <a href="/florian/cookie.js/tree/9fee9b3ce62a2572fdd240f6d72feb12e064ca13" class="d-none js-permalink-shortcut" data-hotkey="y">Permalink</a>

  <table class="files js-navigation-container js-active-navigation-container" data-pjax>


    <tbody>
      <tr class="warning include-fragment-error">
        <td class="icon"><svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"></path></svg></td>
        <td class="content" colspan="3">Failed to load latest commit information.</td>
      </tr>

        <tr class="js-navigation-item">
          <td class="icon">
            <svg aria-hidden="true" class="octicon octicon-file-directory" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M13 4H7V3c0-.66-.31-1-1-1H1c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zM6 4H1V3h5v1z"></path></svg>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/florian/cookie.js/tree/master/tests" class="js-navigation-open" id="b61a6d542f9036550ba9c401c80f00ef-9b7499f1b3c6a519883b826109ae3cf72e0d0f27" title="tests">tests</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a href="/florian/cookie.js/commit/c2d6df57609cf8fc795793237757abf3574c4a38" class="message" data-pjax="true" title="Add removeSpecific function to fix bug">Add removeSpecific function to fix bug</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time-ago datetime="2016-05-06T16:44:27Z">May 6, 2016</time-ago></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <svg aria-hidden="true" class="octicon octicon-file-text" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M6 5H2V4h4v1zM2 8h7V7H2v1zm0 2h7V9H2v1zm0 2h7v-1H2v1zm10-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5z"></path></svg>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/florian/cookie.js/blob/master/.travis.yml" class="js-navigation-open" id="354f30a63fb0907d4ad57269548329e3-54b3a6e2e21a9f4114297acc9dd75af356746fde" title=".travis.yml">.travis.yml</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a href="/florian/cookie.js/commit/ba42fecbb9456728d8abe6a2855c6e866af95160" class="message" data-pjax="true" title="Make sure travis installs grunt-cli">Make sure travis installs grunt-cli</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time-ago datetime="2015-10-24T14:37:42Z">Oct 24, 2015</time-ago></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <svg aria-hidden="true" class="octicon octicon-file-text" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M6 5H2V4h4v1zM2 8h7V7H2v1zm0 2h7V9H2v1zm0 2h7v-1H2v1zm10-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5z"></path></svg>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/florian/cookie.js/blob/master/Gruntfile.js" class="js-navigation-open" id="35b4a816e0441e6a375cd925af50752c-2b4c1b8f00219c51c5083b68f3a3f564255658aa" title="Gruntfile.js">Gruntfile.js</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a href="/florian/cookie.js/commit/c6e4656fd58a29fa8520f3455e4e8072730e9f21" class="message" data-pjax="true" title="Clean up banner in Gruntfile">Clean up banner in Gruntfile</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time-ago datetime="2015-10-25T07:57:03Z">Oct 25, 2015</time-ago></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <svg aria-hidden="true" class="octicon octicon-file-text" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M6 5H2V4h4v1zM2 8h7V7H2v1zm0 2h7V9H2v1zm0 2h7v-1H2v1zm10-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5z"></path></svg>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/florian/cookie.js/blob/master/LICENSE" class="js-navigation-open" id="9879d6db96fd29134fc802214163b95a-23d0a0e45ebe75f971fe18a5d32446f2711efce8" itemprop="license" title="LICENSE">LICENSE</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a href="/florian/cookie.js/commit/adac6f900fd47505dde88a02a1d1312b01b2341a" class="message" data-pjax="true" title="Use full name in license">Use full name in license</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time-ago datetime="2015-10-24T21:28:15Z">Oct 24, 2015</time-ago></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <svg aria-hidden="true" class="octicon octicon-file-text" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M6 5H2V4h4v1zM2 8h7V7H2v1zm0 2h7V9H2v1zm0 2h7v-1H2v1zm10-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5z"></path></svg>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/florian/cookie.js/blob/master/README.md" class="js-navigation-open" id="04c6e90faac2675aa89e2176d2eec7d8-8b580d972e8c8366e203a8f9ec1c12b8f2900d22" title="README.md">README.md</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a href="/florian/cookie.js/commit/0f4e9e285258044964b9eb06d41e3f765d68393f" class="message" data-pjax="true" title="fix typo">fix typo</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time-ago datetime="2016-06-16T20:57:01Z">Jun 16, 2016</time-ago></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <svg aria-hidden="true" class="octicon octicon-file-text" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M6 5H2V4h4v1zM2 8h7V7H2v1zm0 2h7V9H2v1zm0 2h7v-1H2v1zm10-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5z"></path></svg>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/florian/cookie.js/blob/master/bower.json" class="js-navigation-open" id="0a08a7565aba4405282251491979bb6b-4ad749e08fac8abec8ae9f240dc2612d1e886d7f" title="bower.json">bower.json</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a href="/florian/cookie.js/commit/4087687f64f42551a5496a223d44f0577a7888f5" class="message" data-pjax="true" title="Add bower.json file">Add bower.json file</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time-ago datetime="2015-10-24T15:01:38Z">Oct 24, 2015</time-ago></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <svg aria-hidden="true" class="octicon octicon-file-text" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M6 5H2V4h4v1zM2 8h7V7H2v1zm0 2h7V9H2v1zm0 2h7v-1H2v1zm10-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5z"></path></svg>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/florian/cookie.js/blob/master/cookie.js" class="js-navigation-open" id="c1a140ec34b6072d83f809ef70e9baf4-b8a1c5b80d1cc9171fc12e3b716f1728febd1a1a" title="cookie.js">cookie.js</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a href="/florian/cookie.js/commit/c2d6df57609cf8fc795793237757abf3574c4a38" class="message" data-pjax="true" title="Add removeSpecific function to fix bug">Add removeSpecific function to fix bug</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time-ago datetime="2016-05-06T16:44:27Z">May 6, 2016</time-ago></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <svg aria-hidden="true" class="octicon octicon-file-text" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M6 5H2V4h4v1zM2 8h7V7H2v1zm0 2h7V9H2v1zm0 2h7v-1H2v1zm10-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5z"></path></svg>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/florian/cookie.js/blob/master/cookie.min.js" class="js-navigation-open" id="2705cf89f646025cf5357f1175af1dcf-888bc998dffc49a7f08ff3f01fb933bac142d097" title="cookie.min.js">cookie.min.js</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a href="/florian/cookie.js/commit/c2d6df57609cf8fc795793237757abf3574c4a38" class="message" data-pjax="true" title="Add removeSpecific function to fix bug">Add removeSpecific function to fix bug</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time-ago datetime="2016-05-06T16:44:27Z">May 6, 2016</time-ago></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <svg aria-hidden="true" class="octicon octicon-file-text" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M6 5H2V4h4v1zM2 8h7V7H2v1zm0 2h7V9H2v1zm0 2h7v-1H2v1zm10-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5z"></path></svg>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/florian/cookie.js/blob/master/package.json" class="js-navigation-open" id="b9cfc7f2cdf78a7f4b91a753d10865a2-8ad5c3aa938c700aad85533d2ec6b73685147066" title="package.json">package.json</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a href="/florian/cookie.js/commit/bd467e00d9f68746ad87ca9f5e34cacd1323ac87" class="message" data-pjax="true" title="Bump version">Bump version</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time-ago datetime="2016-05-06T16:44:58Z">May 6, 2016</time-ago></span>
          </td>
        </tr>
    </tbody>
  </table>

</div>



  <div id="readme" class="readme boxed-group clearfix announce instapaper_body md">
    <h3>
      <svg aria-hidden="true" class="octicon octicon-book" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M3 5h4v1H3V5zm0 3h4V7H3v1zm0 2h4V9H3v1zm11-5h-4v1h4V5zm0 2h-4v1h4V7zm0 2h-4v1h4V9zm2-6v9c0 .55-.45 1-1 1H9.5l-1 1-1-1H2c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h5.5l1 1 1-1H15c.55 0 1 .45 1 1zm-8 .5L7.5 3H2v9h6V3.5zm7-.5H9.5l-.5.5V12h6V3z"></path></svg>
      README.md
    </h3>

      <article class="markdown-body entry-content" itemprop="text"><h1><a id="user-content-cookiejs--simplifying-cookies-in-javascript-" class="anchor" href="#cookiejs--simplifying-cookies-in-javascript-" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>cookie.js – simplifying cookies in JavaScript <a href="https://travis-ci.org/florian/cookie.js"><img src="https://camo.githubusercontent.com/2e9ab9201105e678b643891447090e880cd89f2a/68747470733a2f2f7472617669732d63692e6f72672f666c6f7269616e2f636f6f6b69652e6a732e706e673f6272616e63683d6d6173746572" alt="Build Status" data-canonical-src="https://travis-ci.org/florian/cookie.js.png?branch=master" style="max-width:100%;"></a></h1>

<p>cookie.js is a tiny JavaScript library that simplifies cookies. It is capable of setting, getting and removing cookies, accepts a variety of parameters, and supports chaining.  It doesn't have any dependencies and minified+gzipped it's only 0.9 KB small.</p>

<h2><a id="user-content-why-would-you-want-to-use-it" class="anchor" href="#why-would-you-want-to-use-it" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Why would you want to use it?</h2>

<p>Working with cookies in JavaScript sucks. <code>document.cookie</code> is definitely one of the ugly parts of JavaScript. This library aims to provide an easy and nevertheless powerful way to use cookies.</p>

<h2><a id="user-content-usage" class="anchor" href="#usage" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h2>

<p>Download <a href="https://raw.github.com/florian/cookie.js/master/cookie.min.js">cookie.min.js</a> and include it in your HTML document, this will add a global object called <code>cookie</code>:</p>

<div class="highlight highlight-text-html-basic"><pre>&lt;<span class="pl-ent">script</span> <span class="pl-e">src</span>=<span class="pl-s"><span class="pl-pds">"</span>cookie.min.js<span class="pl-pds">"</span></span>&gt;&lt;/<span class="pl-ent">script</span>&gt;</pre></div>

<p>Alternatively you can use a JavaScript package manager to add it to your project:</p>

<div class="highlight highlight-source-shell"><pre>$ bower install cookie --save
$ jam install cookie
$ npm install cookie_js --save</pre></div>

<hr>

<p>cookie.js supports AMD and CommonJS. So if you want to include cookie.js dynamically, you can just require it with any AMD / CommonJS loader, for example <a href="http://requirejs.org/">RequireJS</a> for AMD.
Follow the instructions of your loader to include cookie.js.</p>

<hr>

<p>After that you can call any of methods that are explained in the following.</p>

<h2><a id="user-content-cookieset" class="anchor" href="#cookieset" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>cookie.set</h2>

<p>You can use the <code>cookie.set</code> method to set cookies. The value will automatically be escaped for you.</p>

<div class="highlight highlight-source-js"><pre><span class="pl-smi">cookie</span>.<span class="pl-c1">set</span>(<span class="pl-s"><span class="pl-pds">'</span>key<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>value<span class="pl-pds">'</span></span>);</pre></div>

<p><em>Note: Values will be casted to string, so setting a number will work. However, the value will be a string when getting the cookie.</em></p>

<p>You can also set several values at once:</p>

<div class="highlight highlight-source-js"><pre><span class="pl-smi">cookie</span>.<span class="pl-c1">set</span>({
   key1<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>value1<span class="pl-pds">'</span></span>,
   key2<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>value2<span class="pl-pds">'</span></span>
});</pre></div>

<p>If you need more options, like setting the expiry date, you can add an object with options as the last parameter:</p>

<div class="highlight highlight-source-js"><pre><span class="pl-smi">cookie</span>.<span class="pl-c1">set</span>(<span class="pl-s"><span class="pl-pds">'</span>key<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>value<span class="pl-pds">'</span></span>, {
   expires<span class="pl-k">:</span> <span class="pl-c1">7</span>, <span class="pl-c">// expires in one week</span>
});

<span class="pl-smi">cookie</span>.<span class="pl-c1">set</span>({
   key1<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>value1<span class="pl-pds">'</span></span>,
   key2<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>value2<span class="pl-pds">'</span></span>
}, {
   expires<span class="pl-k">:</span> <span class="pl-c1">7</span>
})</pre></div>

<p>The following fields can be added to the mentioned object:</p>

<table><thead>
<tr>
<th align="left">key</th>
<th align="left">value</th>
<th align="left">default value</th>
</tr>
</thead><tbody>
<tr>
<td align="left"><code>expires</code></td>
<td align="left">Either a <code>number</code> containing the days until the expiry, a date in the <code>GMTString</code> format or a <code>date object</code>.</td>
<td align="left">Expires when the browser is closed.</td>
</tr>
<tr>
<td align="left"><code>domain</code></td>
<td align="left">A <code>string</code> that specifies the domain that can access the cookie.</td>
<td align="left">The current domain.</td>
</tr>
<tr>
<td align="left"><code>path</code></td>
<td align="left">A <code>string</code> that limits the access of the cookie to that path.</td>
<td align="left">The current path.</td>
</tr>
<tr>
<td align="left"><code>secure</code></td>
<td align="left">A <code>boolean</code> indicating whether the cookie shall only be accessable over a secure connection or not.</td>
<td align="left"><code>false</code></td>
</tr>
</tbody></table>

<p>You can customize the default settings by manipulating <code>cookie.defaults</code>.</p>

<div class="highlight highlight-source-js"><pre><span class="pl-smi">cookie</span>.<span class="pl-smi">defaults</span>.<span class="pl-smi">expires</span> <span class="pl-k">=</span> <span class="pl-c1">7</span>;
<span class="pl-smi">cookie</span>.<span class="pl-smi">defaults</span>.<span class="pl-smi">secure</span> <span class="pl-k">=</span> <span class="pl-c1">true</span>;</pre></div>

<p>Most people will prefer specifying the expiry date in days, but if you want to specify the expiry date in minutes, then you can configure <code>cookie.expiresMultiplier</code>:</p>

<div class="highlight highlight-source-js"><pre><span class="pl-smi">cookie</span>.<span class="pl-smi">expiresMultiplier</span> <span class="pl-k">=</span> <span class="pl-c1">60</span>; <span class="pl-c">// Seconds.</span>
<span class="pl-smi">cookie</span>.<span class="pl-smi">expiresMultiplier</span> <span class="pl-k">=</span> <span class="pl-c1">60</span> <span class="pl-k">*</span> <span class="pl-c1">60</span>; <span class="pl-c">// Minutes.</span>
<span class="pl-smi">cookie</span>.<span class="pl-smi">expiresMultiplier</span> <span class="pl-k">=</span> <span class="pl-c1">60</span> <span class="pl-k">*</span> <span class="pl-c1">60</span> <span class="pl-k">*</span> <span class="pl-c1">24</span>; <span class="pl-c">// Hours.</span></pre></div>

<h2><a id="user-content-cookieget" class="anchor" href="#cookieget" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>cookie.get</h2>

<p>This method allows you to retrieve your cookies, you can use it by simply passing the key of the cookie:</p>

<div class="highlight highlight-source-js"><pre><span class="pl-smi">cookie</span>.<span class="pl-c1">get</span>(<span class="pl-s"><span class="pl-pds">'</span>key<span class="pl-pds">'</span></span>);</pre></div>

<p>Passing just one key like this will return a string, containing the value of the cookie. You can also pass an array of keys:</p>

<div class="highlight highlight-source-js"><pre><span class="pl-smi">cookie</span>.<span class="pl-c1">get</span>([<span class="pl-s"><span class="pl-pds">'</span>key1<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>key2<span class="pl-pds">'</span></span>]);</pre></div>

<p>This will always return an object. The keys of this object will be the keys you passed and the values are the corresponding values.</p>

<p>In case you want to add a default value you can use the second parameter. The default value will be returned if the cookie<em>(s)</em> could not be found:</p>

<div class="highlight highlight-source-js"><pre><span class="pl-smi">cookie</span>.<span class="pl-c1">get</span>(<span class="pl-s"><span class="pl-pds">'</span>key<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>default value<span class="pl-pds">'</span></span>);</pre></div>

<p>This also works with several keys:</p>

<div class="highlight highlight-source-js"><pre><span class="pl-smi">cookie</span>.<span class="pl-c1">get</span>([<span class="pl-s"><span class="pl-pds">'</span>key1<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>key2<span class="pl-pds">'</span></span>], <span class="pl-s"><span class="pl-pds">'</span>default value<span class="pl-pds">'</span></span>);</pre></div>

<p><code>cookie()</code> is a shortcut for <code>cookie.get()</code>.</p>

<div class="highlight highlight-source-js"><pre><span class="pl-smi">cookie</span>.<span class="pl-c1">get</span>(<span class="pl-s"><span class="pl-pds">'</span>key<span class="pl-pds">'</span></span>);
<span class="pl-c">// is the same as</span>
<span class="pl-en">cookie</span>(<span class="pl-s"><span class="pl-pds">'</span>key<span class="pl-pds">'</span></span>);</pre></div>

<h2><a id="user-content-cookieall" class="anchor" href="#cookieall" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>cookie.all</h2>

<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> cookies <span class="pl-k">=</span> <span class="pl-smi">cookie</span>.<span class="pl-c1">all</span>();</pre></div>

<p>To get all of the currently saved cookies simply call <code>cookie.all</code>. In this case the variable <code>cookies</code> will return an object with all the current cookies.</p>

<h2><a id="user-content-cookieremove" class="anchor" href="#cookieremove" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>cookie.remove</h2>

<p>This method allows you to remove cookies. It accepts an infinite number of keys or an array of keys.</p>

<div class="highlight highlight-source-js"><pre><span class="pl-smi">cookie</span>.<span class="pl-c1">remove</span>(<span class="pl-s"><span class="pl-pds">'</span>key<span class="pl-pds">'</span></span>);
<span class="pl-smi">cookie</span>.<span class="pl-c1">remove</span>(<span class="pl-s"><span class="pl-pds">'</span>key1<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>key2<span class="pl-pds">'</span></span>);
<span class="pl-smi">cookie</span>.<span class="pl-c1">remove</span>([<span class="pl-s"><span class="pl-pds">'</span>key1<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>key2<span class="pl-pds">'</span></span>]);</pre></div>

<h2><a id="user-content-cookieempty" class="anchor" href="#cookieempty" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>cookie.empty</h2>

<p>Sometimes you may want to remove all cookies. Simply call <code>cookie.empty()</code> and every cookie will be removed.</p>

<h2><a id="user-content-cookieenabled" class="anchor" href="#cookieenabled" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>cookie.enabled</h2>

<p>This method allows you to test if the cookies are enabled. It returns <code>true</code> if you can work with cookies and <code>false</code> if you cannot. You might want to use a fallback if they are disabled:</p>

<div class="highlight highlight-source-js"><pre><span class="pl-k">if</span> (<span class="pl-smi">cookie</span>.<span class="pl-en">enabled</span>()) {
   <span class="pl-c">// Do stuff with cookies</span>
} <span class="pl-k">else</span> {
   <span class="pl-c">// Display error message or use localStorage</span>
}</pre></div>

<h2><a id="user-content-cookiesetdefault" class="anchor" href="#cookiesetdefault" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>cookie.setDefault</h2>

<p>This method works just like <code>cookie.set</code> and accepts the same arguments, but it
only sets those cookies that don't have a value yet allowing you to specify
default values.</p>

<div class="highlight highlight-source-js"><pre><span class="pl-smi">cookie</span>.<span class="pl-c1">set</span>(<span class="pl-s"><span class="pl-pds">'</span>a<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>1<span class="pl-pds">'</span></span>);
<span class="pl-smi">cookie</span>.<span class="pl-en">setDefault</span>({
   a<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>2<span class="pl-pds">'</span></span>,
   b<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>2<span class="pl-pds">'</span></span>
});

<span class="pl-smi">cookie</span>.<span class="pl-c1">get</span>([<span class="pl-s"><span class="pl-pds">'</span>a<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>b<span class="pl-pds">'</span></span>]); <span class="pl-c">// {a: "1", b: "2"}</span></pre></div>

<h2><a id="user-content-cookieremovespecific" class="anchor" href="#cookieremovespecific" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>cookie.removeSpecific</h2>

<p>If you want to remove cookies that were set with custom options (e.g. specifing
<code>domain</code> or path) then those are also needed to remove the cookie. This library
can't automatically specify those for you because you might've set the cookie on
the server and the JS cookie API doesn't offer a way to retrieve this
information.</p>

<div class="highlight highlight-source-js"><pre><span class="pl-smi">cookie</span>.<span class="pl-c1">set</span>(<span class="pl-s"><span class="pl-pds">'</span>a<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>b<span class="pl-pds">'</span></span>, { path<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>/somepath<span class="pl-pds">'</span></span> });

<span class="pl-c">// This won't work</span>
<span class="pl-smi">cookie</span>.<span class="pl-c1">remove</span>(<span class="pl-s"><span class="pl-pds">'</span>a<span class="pl-pds">'</span></span>);

<span class="pl-c">// You have to do this</span>
<span class="pl-smi">cookie</span>.<span class="pl-en">removeSpecific</span>(<span class="pl-s"><span class="pl-pds">'</span>a<span class="pl-pds">'</span></span>, { path<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>/somepath<span class="pl-pds">'</span></span> });

<span class="pl-c">// You can also give an array of cookie keys</span>
<span class="pl-smi">cookie</span>.<span class="pl-en">removeSpecific</span>([<span class="pl-s"><span class="pl-pds">'</span>a<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>b<span class="pl-pds">'</span></span>], { path<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>/somepath<span class="pl-pds">'</span></span> });</pre></div>

<p>This can be pretty annoying. So in case you would need to do this a lot it's
suggested to just change <code>cookie.defaults</code> as explained in the <code>cookie.set</code>
documentation. The default options are used by <code>remove</code> and <code>removeSpecific</code> as
well.</p>

<h2><a id="user-content-chaining" class="anchor" href="#chaining" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Chaining</h2>

<p>The methods <code>set</code>, <code>remove</code>, <code>empty</code>, <code>setDefault</code>, <code>removeSpecific</code> return the cookie object and therefore enable chaining.</p>

<div class="highlight highlight-source-js"><pre><span class="pl-smi">cookie</span>.<span class="pl-en">empty</span>().<span class="pl-c1">set</span>(<span class="pl-s"><span class="pl-pds">'</span>key1<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>value1<span class="pl-pds">'</span></span>).<span class="pl-c1">set</span>(<span class="pl-s"><span class="pl-pds">'</span>key2<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>value2<span class="pl-pds">'</span></span>).<span class="pl-c1">remove</span>(<span class="pl-s"><span class="pl-pds">'</span>key1<span class="pl-pds">'</span></span>);</pre></div>

<h2><a id="user-content-a-word-on-encoding" class="anchor" href="#a-word-on-encoding" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>A word on encoding</h2>

<p>cookie.js sensibly encodes / decodes values and should work just fine with most
server side frameworks. However sometimes there are weird server side encodings,
for example PHP escapes spaces with <code>+</code> for historic reasons.
This library can't handle all of those cases at the same time so if you notice
you need a custom decoding function you can overwrite <code>cookie.utils.decode</code>.</p>

<div class="highlight highlight-source-js"><pre><span class="pl-c">// For example</span>
<span class="pl-smi">cookie</span>.<span class="pl-smi">utils</span>.<span class="pl-en">decode</span> <span class="pl-k">=</span> <span class="pl-k">function</span> (<span class="pl-smi">value</span>) {
   <span class="pl-k">return</span> <span class="pl-c1">decodeURIComponent</span>(value).<span class="pl-c1">replace</span>(<span class="pl-s"><span class="pl-pds">'</span>+<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span> <span class="pl-pds">'</span></span>);
};</pre></div>

<hr>

<h2><a id="user-content-wiki-pages" class="anchor" href="#wiki-pages" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Wiki pages</h2>

<ul>
<li><a href="https://github.com/florian/cookie.js/wiki/Contribute">Contribute</a></li>
<li><a href="https://github.com/florian/cookie.js/wiki/Changelog">Changelog</a></li>
</ul>
</article>
  </div>


  </div>
  <div class="modal-backdrop js-touch-events"></div>
</div>


    </div>
  </div>

    </div>

        <div class="container site-footer-container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links float-right">
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact GitHub</a></li>
      <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>

    </ul>

    <a href="https://github.com" aria-label="Homepage" class="site-footer-mark" title="GitHub">
      <svg aria-hidden="true" class="octicon octicon-mark-github" height="24" version="1.1" viewBox="0 0 16 16" width="24"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
</a>
    <ul class="site-footer-links">
      <li>&copy; 2016 <span title="0.11358s from github-fe123-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
        <li><a href="https://help.github.com" data-ga-click="Footer, go to help, text:help">Help</a></li>
    </ul>
  </div>
</div>



    

    <div id="ajax-error-message" class="ajax-error-message flash flash-error">
      <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"></path></svg>
      <button type="button" class="flash-close js-flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
        <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"></path></svg>
      </button>
      You can't perform that action at this time.
    </div>


      
      <script crossorigin="anonymous" integrity="sha256-iEca8f7ED/lBjvvi3dFbaJavjXcvgXkATCVN/8JepJA=" src="https://assets-cdn.github.com/assets/frameworks-88471af1fec40ff9418efbe2ddd15b6896af8d772f8179004c254dffc25ea490.js"></script>
      <script async="async" crossorigin="anonymous" integrity="sha256-DV6FJLLtne64Bvp0viJyjRbNoUyqZX0sFY/HYsDuR68=" src="https://assets-cdn.github.com/assets/github-0d5e8524b2ed9deeb806fa74be22728d16cda14caa657d2c158fc762c0ee47af.js"></script>
      
      
      
      
      
      
    <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner d-none">
      <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"></path></svg>
      <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
      <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
    </div>
    <div class="facebox" id="facebox" style="display:none;">
  <div class="facebox-popup">
    <div class="facebox-content" role="dialog" aria-labelledby="facebox-header" aria-describedby="facebox-description">
    </div>
    <button type="button" class="facebox-close js-facebox-close" aria-label="Close modal">
      <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"></path></svg>
    </button>
  </div>
</div>

  </body>
</html>

