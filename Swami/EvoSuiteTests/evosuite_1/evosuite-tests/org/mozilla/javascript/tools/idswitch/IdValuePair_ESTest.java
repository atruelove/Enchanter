/*
 * This file was automatically generated by EvoSuite
 * Tue Jul 31 22:32:14 GMT 2018
 */

package org.mozilla.javascript.tools.idswitch;

import org.junit.Test;
import static org.junit.Assert.*;
import org.evosuite.runtime.EvoRunner;
import org.evosuite.runtime.EvoRunnerParameters;
import org.junit.runner.RunWith;
import org.mozilla.javascript.tools.idswitch.IdValuePair;

@RunWith(EvoRunner.class) @EvoRunnerParameters(mockJVMNonDeterminism = true, useVFS = true, useVNET = true, resetStaticState = true, separateClassLoader = false, useJEE = true) 
public class IdValuePair_ESTest extends IdValuePair_ESTest_scaffolding {

  @Test(timeout = 4000)
  public void test0()  throws Throwable  {
      IdValuePair idValuePair0 = new IdValuePair("", "dT0FI{qiZS");
      idValuePair0.setLineNumber(0);
      assertEquals(0, idValuePair0.getLineNumber());
  }

  @Test(timeout = 4000)
  public void test1()  throws Throwable  {
      IdValuePair idValuePair0 = new IdValuePair("", "dT0FI{qiZS");
      int int0 = idValuePair0.getLineNumber();
      assertEquals(0, int0);
  }
}
