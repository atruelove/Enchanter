/*
 * This file was automatically generated by EvoSuite
 * Tue Jul 31 17:13:09 GMT 2018
 */

package org.mozilla.javascript.ast;

import org.junit.Test;
import static org.junit.Assert.*;
import static org.evosuite.runtime.EvoAssertions.*;
import org.evosuite.runtime.EvoRunner;
import org.evosuite.runtime.EvoRunnerParameters;
import org.junit.runner.RunWith;
import org.mozilla.javascript.ast.Label;

@RunWith(EvoRunner.class) @EvoRunnerParameters(mockJVMNonDeterminism = true, useVFS = true, useVNET = true, resetStaticState = true, separateClassLoader = false, useJEE = true) 
public class Label_ESTest extends Label_ESTest_scaffolding {

  @Test(timeout = 4000)
  public void test0()  throws Throwable  {
      Label label0 = new Label(1034, 1034);
      String string0 = label0.debugPrint();
      assertEquals("1034\tLABEL 1034 1034\n", string0);
  }

  @Test(timeout = 4000)
  public void test1()  throws Throwable  {
      Label label0 = new Label(1034, 1034);
      String string0 = label0.toSource((-1001));
      assertEquals(1034, label0.getLength());
      assertEquals(1034, label0.getPosition());
      assertEquals("null:\n", string0);
      assertEquals(131, label0.getType());
  }

  @Test(timeout = 4000)
  public void test2()  throws Throwable  {
      Label label0 = new Label(1034, 1034);
      label0.getName();
      assertEquals(1034, label0.getLength());
      assertEquals(131, label0.getType());
      assertEquals(1034, label0.getPosition());
  }

  @Test(timeout = 4000)
  public void test3()  throws Throwable  {
      Label label0 = new Label(0, (-233), "POc[K=*+");
      assertEquals((-233), label0.getLength());
      assertEquals(0, label0.getPosition());
      assertEquals("131", label0.toString());
  }

  @Test(timeout = 4000)
  public void test4()  throws Throwable  {
      Label label0 = null;
      try {
        label0 = new Label(2706, 2706, "");
        fail("Expecting exception: IllegalArgumentException");
      
      } catch(IllegalArgumentException e) {
         //
         // invalid label name
         //
         verifyException("org.mozilla.javascript.ast.Label", e);
      }
  }

  @Test(timeout = 4000)
  public void test5()  throws Throwable  {
      Label label0 = new Label(1);
      assertEquals((-1), label0.getLength());
      assertEquals(1, label0.getPosition());
      assertEquals("131", label0.toString());
  }

  @Test(timeout = 4000)
  public void test6()  throws Throwable  {
      Label label0 = new Label();
      assertEquals("131", label0.toString());
  }
}
