/*
 * This file was automatically generated by EvoSuite
 * Wed Aug 01 18:31:57 GMT 2018
 */

package org.mozilla.javascript.regexp;

import org.junit.Test;
import static org.junit.Assert.*;
import org.evosuite.runtime.EvoRunner;
import org.evosuite.runtime.EvoRunnerParameters;
import org.junit.runner.RunWith;
import org.mozilla.javascript.regexp.REBackTrackData;
import org.mozilla.javascript.regexp.REGlobalData;
import org.mozilla.javascript.regexp.REProgState;

@RunWith(EvoRunner.class) @EvoRunnerParameters(mockJVMNonDeterminism = true, useVFS = true, useVNET = true, resetStaticState = true, separateClassLoader = true, useJEE = true) 
public class REProgState_ESTest extends REProgState_ESTest_scaffolding {

  @Test(timeout = 4000)
  public void test0()  throws Throwable  {
      REGlobalData rEGlobalData0 = new REGlobalData();
      REBackTrackData rEBackTrackData0 = new REBackTrackData(rEGlobalData0, 1, 0, 506, 2113, 0);
      REProgState rEProgState0 = new REProgState((REProgState) null, 1, 1, 32, rEBackTrackData0, 0, 2113);
  }
}
