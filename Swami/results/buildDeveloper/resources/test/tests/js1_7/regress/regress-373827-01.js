/* -*- Mode: C++; tab-width: 2; indent-tabs-mode: nil; c-basic-offset: 2 -*- */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

var gTestfile = 'regress-373827-01.js';
//-----------------------------------------------------------------------------
var BUGNUMBER = 373827;
var summary = 'Do not assert: OBJ_GET_CLASS(cx, obj)->flags & JSCLASS_HAS_PRIVATE';
var actual = '';
var expect = '';


//-----------------------------------------------------------------------------
test();
//-----------------------------------------------------------------------------

function test()
{
  enterFunc ('test');
  printBugNumber(BUGNUMBER);
  printStatus (summary);
 
  let ([] = [{x: function(){}}]) { };

  reportCompare(expect, actual, summary);

  exitFunc ('test');
}
