/*
 * This file was automatically generated by EvoSuite
 * Fri Aug 03 01:42:48 GMT 2018
 */

package org.mozilla.javascript;

import org.junit.Test;
import static org.junit.Assert.*;
import org.evosuite.runtime.EvoRunner;
import org.evosuite.runtime.EvoRunnerParameters;
import org.junit.runner.RunWith;
import org.mozilla.javascript.jdk15.VMBridge_jdk15;

@RunWith(EvoRunner.class) @EvoRunnerParameters(mockJVMNonDeterminism = true, useVFS = true, useVNET = true, resetStaticState = true, separateClassLoader = true, useJEE = true) 
public class VMBridge_ESTest extends VMBridge_ESTest_scaffolding {

  @Test(timeout = 4000)
  public void test0()  throws Throwable  {
      VMBridge_jdk15 vMBridge_jdk15_0 = new VMBridge_jdk15();
  }
}
