# -iOS_Set_Cookie_Bug_external_service

## Summary

A service that an add-in can call which will set a cookie and then attempt to output the set cookies on another page. This is to illustrate the iOS Set-Cookie problem.
This repository should be used with https://github.com/westconference/iOS_Set_Cookie_Bug_add_in.

## Quick Start

```
npm install
```

```
npm start
```

The service should be accessible at https://localhost:4000/landing.

## Usage

The endpoint https://localhost:4000/landing will read a query parameter passed to it 'returnUrl' and pass a Set-Cookie header to client with 'ReturnUrl' set to that specified value.

e.g.
https://localhost:4000/landing?returnUrl=https://example.com

Landing page will set the ReturnUrl cookie to have a value 'https://example.com' and then redirect to 'read' page which should output the currently stored cookies for the domain, including this cookie.

```
ReturnURL=https://example.com
```
