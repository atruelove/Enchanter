/*
 * This file was automatically generated by EvoSuite
 * Wed Aug 01 18:36:48 GMT 2018
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
import org.mozilla.javascript.ImporterTopLevel;
import org.mozilla.javascript.NativeArray;
import org.mozilla.javascript.NativeObject;
import org.mozilla.javascript.Scriptable;
import org.mozilla.javascript.ScriptableObject;
import org.mozilla.javascript.TopLevel;
import org.mozilla.javascript.regexp.RegExpImpl;
import org.mozilla.javascript.regexp.SubString;

@RunWith(EvoRunner.class) @EvoRunnerParameters(mockJVMNonDeterminism = true, useVFS = true, useVNET = true, resetStaticState = true, separateClassLoader = true, useJEE = true) 
public class RegExpImpl_ESTest extends RegExpImpl_ESTest_scaffolding {

  @Test(timeout = 4000)
  public void test00()  throws Throwable  {
      RegExpImpl regExpImpl0 = new RegExpImpl();
      Context context0 = Context.enter();
      TopLevel topLevel0 = new TopLevel();
      // Undeclared exception!
      try { 
        regExpImpl0.wrapRegExp(context0, topLevel0, topLevel0);
        fail("Expecting exception: ClassCastException");
      
      } catch(ClassCastException e) {
         //
         // org.mozilla.javascript.TopLevel cannot be cast to org.mozilla.javascript.regexp.RECompiled
         //
         verifyException("org.mozilla.javascript.regexp.RegExpImpl", e);
      }
  }

  @Test(timeout = 4000)
  public void test01()  throws Throwable  {
      RegExpImpl regExpImpl0 = new RegExpImpl();
      ContextFactory contextFactory0 = ContextFactory.getGlobal();
      Context context0 = contextFactory0.enterContext();
      ScriptableObject scriptableObject0 = context0.initStandardObjects();
      Object[] objectArray0 = new Object[1];
      Object object0 = regExpImpl0.action(context0, scriptableObject0, scriptableObject0, objectArray0, 3);
      assertEquals((-1), object0);
      assertNotNull(object0);
  }

  @Test(timeout = 4000)
  public void test02()  throws Throwable  {
      RegExpImpl regExpImpl0 = new RegExpImpl();
      ContextFactory contextFactory0 = ContextFactory.getGlobal();
      Context context0 = contextFactory0.enterContext();
      ImporterTopLevel importerTopLevel0 = new ImporterTopLevel();
      Object[] objectArray0 = new Object[6];
      objectArray0[1] = (Object) 150;
      NativeArray nativeArray0 = (NativeArray)regExpImpl0.js_split(context0, importerTopLevel0, "error reporter", objectArray0);
      assertFalse(nativeArray0.isEmpty());
  }

  @Test(timeout = 4000)
  public void test03()  throws Throwable  {
      RegExpImpl regExpImpl0 = new RegExpImpl();
      SubString[] subStringArray0 = new SubString[8];
      SubString subString0 = new SubString("UbH[*V@F$i4O{=&Hu:", 0, 0);
      subStringArray0[0] = subString0;
      regExpImpl0.parens = subStringArray0;
      SubString subString1 = regExpImpl0.getParenSubString(0);
      assertNotNull(subString1);
      assertSame(subString1, subString0);
  }

  @Test(timeout = 4000)
  public void test04()  throws Throwable  {
      RegExpImpl regExpImpl0 = new RegExpImpl();
      SubString[] subStringArray0 = new SubString[8];
      regExpImpl0.parens = subStringArray0;
      SubString subString0 = regExpImpl0.getParenSubString(0);
      assertEquals("", subString0.toString());
  }

  @Test(timeout = 4000)
  public void test05()  throws Throwable  {
      RegExpImpl regExpImpl0 = new RegExpImpl();
      ContextFactory contextFactory0 = ContextFactory.getGlobal();
      Context context0 = contextFactory0.enterContext();
      ScriptableObject scriptableObject0 = context0.initStandardObjects();
      NativeArray nativeArray0 = (NativeArray)regExpImpl0.js_split(context0, scriptableObject0, "", context0.emptyArgs);
      assertEquals(1L, nativeArray0.getLength());
      
      ImporterTopLevel importerTopLevel0 = new ImporterTopLevel();
      Object[] objectArray0 = new Object[6];
      objectArray0[0] = (Object) nativeArray0;
      NativeArray nativeArray1 = (NativeArray)regExpImpl0.js_split(context0, importerTopLevel0, "error reporter", objectArray0);
      assertEquals(0L, nativeArray1.getLength());
  }

  @Test(timeout = 4000)
  public void test06()  throws Throwable  {
      ContextFactory contextFactory0 = ContextFactory.getGlobal();
      Context context0 = contextFactory0.enterContext();
      NativeArray nativeArray0 = new NativeArray(context0.emptyArgs);
      RegExpImpl regExpImpl0 = new RegExpImpl();
      Object[] objectArray0 = new Object[1];
      NativeArray nativeArray1 = (NativeArray)regExpImpl0.js_split(context0, nativeArray0, "", objectArray0);
      assertFalse(nativeArray1.isEmpty());
  }

  @Test(timeout = 4000)
  public void test07()  throws Throwable  {
      RegExpImpl regExpImpl0 = new RegExpImpl();
      ContextFactory contextFactory0 = ContextFactory.getGlobal();
      Context context0 = contextFactory0.enterContext();
      ScriptableObject scriptableObject0 = context0.initStandardObjects();
      Object[] objectArray0 = new Object[1];
      Object object0 = regExpImpl0.action(context0, scriptableObject0, scriptableObject0, objectArray0, 1);
      assertNull(object0);
  }

  @Test(timeout = 4000)
  public void test08()  throws Throwable  {
      RegExpImpl regExpImpl0 = new RegExpImpl();
      Context context0 = Context.getCurrentContext();
      // Undeclared exception!
      try { 
        regExpImpl0.compileRegExp(context0, "", ":R5Lp");
        fail("Expecting exception: RuntimeException");
      
      } catch(RuntimeException e) {
         //
         // SyntaxError: invalid flag after regular expression
         //
         verifyException("org.mozilla.javascript.ScriptRuntime", e);
      }
  }

  @Test(timeout = 4000)
  public void test09()  throws Throwable  {
      RegExpImpl regExpImpl0 = new RegExpImpl();
      ContextFactory contextFactory0 = ContextFactory.getGlobal();
      Context context0 = contextFactory0.enterContext();
      ScriptableObject scriptableObject0 = context0.initStandardObjects((ScriptableObject) null, true);
      // Undeclared exception!
      try { 
        regExpImpl0.action(context0, scriptableObject0, (Scriptable) null, context0.emptyArgs, 2345);
        fail("Expecting exception: IllegalStateException");
      
      } catch(IllegalStateException e) {
         //
         // FAILED ASSERTION
         //
         verifyException("org.mozilla.javascript.Kit", e);
      }
  }

  @Test(timeout = 4000)
  public void test10()  throws Throwable  {
      RegExpImpl regExpImpl0 = new RegExpImpl();
      Context context0 = Context.getCurrentContext();
      NativeObject nativeObject0 = new NativeObject();
      Object[] objectArray0 = new Object[1];
      Object object0 = regExpImpl0.action(context0, nativeObject0, (Scriptable) null, objectArray0, 2);
      assertEquals("undefined", object0);
  }
}
