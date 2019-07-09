/*
 * This file was automatically generated by EvoSuite
 * Wed Aug 01 18:42:25 GMT 2018
 */

package org.mozilla.javascript.regexp;

import org.junit.Test;
import static org.junit.Assert.*;
import static org.evosuite.runtime.EvoAssertions.*;
import org.evosuite.runtime.EvoRunner;
import org.evosuite.runtime.EvoRunnerParameters;
import org.junit.runner.RunWith;
import org.mozilla.javascript.Context;
import org.mozilla.javascript.ContextFactory;
import org.mozilla.javascript.IdFunctionObject;
import org.mozilla.javascript.ScriptableObject;
import org.mozilla.javascript.regexp.NativeRegExp;
import org.mozilla.javascript.regexp.NativeRegExpCtor;
import org.mozilla.javascript.regexp.RegExpImpl;

@RunWith(EvoRunner.class) @EvoRunnerParameters(mockJVMNonDeterminism = true, useVFS = true, useVNET = true, resetStaticState = true, separateClassLoader = true, useJEE = true) 
public class NativeRegExpCtor_ESTest extends NativeRegExpCtor_ESTest_scaffolding {

  @Test(timeout = 4000)
  public void test00()  throws Throwable  {
      NativeRegExpCtor nativeRegExpCtor0 = new NativeRegExpCtor();
      RegExpImpl regExpImpl0 = new RegExpImpl();
      nativeRegExpCtor0.setInstanceIdValue(2, regExpImpl0);
      assertEquals(8, ScriptableObject.UNINITIALIZED_CONST);
  }

  @Test(timeout = 4000)
  public void test01()  throws Throwable  {
      NativeRegExpCtor nativeRegExpCtor0 = new NativeRegExpCtor();
      nativeRegExpCtor0.setInstanceIdValue(21, "HJJ+%=cgQhf");
      assertEquals(2, nativeRegExpCtor0.getArity());
  }

  @Test(timeout = 4000)
  public void test02()  throws Throwable  {
      NativeRegExpCtor nativeRegExpCtor0 = new NativeRegExpCtor();
      nativeRegExpCtor0.setInstanceIdValue(16, (Object) null);
      assertEquals(8, ScriptableObject.UNINITIALIZED_CONST);
  }

  @Test(timeout = 4000)
  public void test03()  throws Throwable  {
      NativeRegExpCtor nativeRegExpCtor0 = new NativeRegExpCtor();
      ContextFactory contextFactory0 = new ContextFactory();
      Context context0 = contextFactory0.enterContext();
      nativeRegExpCtor0.setInstanceIdValue(8, context0);
      assertEquals(12, Context.FEATURE_WARNING_AS_ERROR);
  }

  @Test(timeout = 4000)
  public void test04()  throws Throwable  {
      NativeRegExpCtor nativeRegExpCtor0 = new NativeRegExpCtor();
      nativeRegExpCtor0.setInstanceIdAttributes(4, 2);
      assertEquals(2, nativeRegExpCtor0.getArity());
  }

  @Test(timeout = 4000)
  public void test05()  throws Throwable  {
      NativeRegExpCtor nativeRegExpCtor0 = new NativeRegExpCtor();
      nativeRegExpCtor0.setInstanceIdAttributes(20, 0);
      assertTrue(nativeRegExpCtor0.isExtensible());
  }

  @Test(timeout = 4000)
  public void test06()  throws Throwable  {
      NativeRegExpCtor nativeRegExpCtor0 = new NativeRegExpCtor();
      // Undeclared exception!
      try { 
        nativeRegExpCtor0.setInstanceIdAttributes(1427, 17);
        fail("Expecting exception: IllegalArgumentException");
      
      } catch(IllegalArgumentException e) {
         //
         // 1427
         //
         verifyException("org.mozilla.javascript.IdScriptableObject", e);
      }
  }

  @Test(timeout = 4000)
  public void test07()  throws Throwable  {
      NativeRegExpCtor nativeRegExpCtor0 = new NativeRegExpCtor();
      nativeRegExpCtor0.setInstanceIdAttributes(10, 10);
      assertEquals(2, nativeRegExpCtor0.getLength());
  }

  @Test(timeout = 4000)
  public void test08()  throws Throwable  {
      NativeRegExpCtor nativeRegExpCtor0 = new NativeRegExpCtor();
      nativeRegExpCtor0.setInstanceIdAttributes(9, 9);
      assertEquals(2, nativeRegExpCtor0.getLength());
  }

  @Test(timeout = 4000)
  public void test09()  throws Throwable  {
      NativeRegExpCtor nativeRegExpCtor0 = new NativeRegExpCtor();
      nativeRegExpCtor0.setInstanceIdAttributes(7, 7);
      assertEquals("Function", nativeRegExpCtor0.getClassName());
  }

  @Test(timeout = 4000)
  public void test10()  throws Throwable  {
      NativeRegExpCtor nativeRegExpCtor0 = new NativeRegExpCtor();
      nativeRegExpCtor0.setInstanceIdAttributes(6, 4);
      assertEquals(4, ScriptableObject.PERMANENT);
  }

  @Test(timeout = 4000)
  public void test11()  throws Throwable  {
      NativeRegExpCtor nativeRegExpCtor0 = new NativeRegExpCtor();
      nativeRegExpCtor0.setInstanceIdAttributes(8, 8);
      assertFalse(nativeRegExpCtor0.isSealed());
  }

  @Test(timeout = 4000)
  public void test12()  throws Throwable  {
      NativeRegExpCtor nativeRegExpCtor0 = new NativeRegExpCtor();
      int int0 = nativeRegExpCtor0.getLength();
      assertEquals(2, int0);
  }

  @Test(timeout = 4000)
  public void test13()  throws Throwable  {
      NativeRegExpCtor nativeRegExpCtor0 = new NativeRegExpCtor();
      // Undeclared exception!
      try { 
        nativeRegExpCtor0.getInstanceIdValue(0);
        fail("Expecting exception: IllegalStateException");
      
      } catch(IllegalStateException e) {
         //
         // 0
         //
         verifyException("org.mozilla.javascript.IdScriptableObject", e);
      }
  }

  @Test(timeout = 4000)
  public void test14()  throws Throwable  {
      NativeRegExpCtor nativeRegExpCtor0 = new NativeRegExpCtor();
      String string0 = nativeRegExpCtor0.getFunctionName();
      assertEquals("RegExp", string0);
  }

  @Test(timeout = 4000)
  public void test15()  throws Throwable  {
      NativeRegExpCtor nativeRegExpCtor0 = new NativeRegExpCtor();
      int int0 = nativeRegExpCtor0.getArity();
      assertEquals(2, int0);
  }

  @Test(timeout = 4000)
  public void test16()  throws Throwable  {
      NativeRegExpCtor nativeRegExpCtor0 = new NativeRegExpCtor();
      int int0 = nativeRegExpCtor0.findInstanceIdInfo("8W");
      assertEquals(0, int0);
  }

  @Test(timeout = 4000)
  public void test17()  throws Throwable  {
      NativeRegExpCtor nativeRegExpCtor0 = new NativeRegExpCtor();
      Object[] objectArray0 = nativeRegExpCtor0.getIds();
      assertEquals(21, objectArray0.length);
  }

  @Test(timeout = 4000)
  public void test18()  throws Throwable  {
      NativeRegExpCtor nativeRegExpCtor0 = new NativeRegExpCtor();
      Context context0 = Context.getCurrentContext();
      NativeRegExp nativeRegExp0 = new NativeRegExp();
      IdFunctionObject idFunctionObject0 = new IdFunctionObject(nativeRegExpCtor0, nativeRegExp0, 14, "language version", 13, nativeRegExp0);
      Object[] objectArray0 = new Object[1];
      objectArray0[0] = (Object) nativeRegExp0;
      Object object0 = nativeRegExpCtor0.call(context0, nativeRegExp0, idFunctionObject0, objectArray0);
      assertSame(object0, nativeRegExp0);
  }
}
