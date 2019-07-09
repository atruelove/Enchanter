/*
 * This file was automatically generated by EvoSuite
 * Wed Aug 01 03:07:46 GMT 2018
 */

package org.mozilla.javascript;

import org.junit.Test;
import static org.junit.Assert.*;
import static org.evosuite.runtime.EvoAssertions.*;
import org.evosuite.runtime.EvoRunner;
import org.evosuite.runtime.EvoRunnerParameters;
import org.junit.runner.RunWith;
import org.mozilla.javascript.CodeGenerator;
import org.mozilla.javascript.Icode;

@RunWith(EvoRunner.class) @EvoRunnerParameters(mockJVMNonDeterminism = true, useVFS = true, useVNET = true, resetStaticState = true, separateClassLoader = true, useJEE = true) 
public class Icode_ESTest extends Icode_ESTest_scaffolding {

  @Test(timeout = 4000)
  public void test0()  throws Throwable  {
      // Undeclared exception!
      try { 
        Icode.bytecodeName(3924);
        fail("Expecting exception: IllegalArgumentException");
      
      } catch(IllegalArgumentException e) {
         //
         // 3924
         //
         verifyException("org.mozilla.javascript.Icode", e);
      }
  }

  @Test(timeout = 4000)
  public void test1()  throws Throwable  {
      String string0 = Icode.bytecodeName(69);
      assertEquals("69", string0);
  }

  @Test(timeout = 4000)
  public void test2()  throws Throwable  {
      CodeGenerator codeGenerator0 = new CodeGenerator();
  }
}
