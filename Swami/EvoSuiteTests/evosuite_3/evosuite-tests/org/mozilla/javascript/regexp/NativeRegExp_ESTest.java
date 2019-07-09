/*
 * This file was automatically generated by EvoSuite
 * Wed Aug 01 18:30:49 GMT 2018
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
import org.mozilla.javascript.NativeArray;
import org.mozilla.javascript.NativeJavaClass;
import org.mozilla.javascript.NativeObject;
import org.mozilla.javascript.Scriptable;
import org.mozilla.javascript.ScriptableObject;
import org.mozilla.javascript.regexp.NativeRegExp;
import org.mozilla.javascript.regexp.RECompiled;
import org.mozilla.javascript.regexp.RegExpImpl;
import org.mozilla.javascript.typedarrays.NativeArrayBuffer;
import org.mozilla.javascript.typedarrays.NativeInt8Array;
import org.mozilla.javascript.typedarrays.NativeUint8ClampedArray;

@RunWith(EvoRunner.class) @EvoRunnerParameters(mockJVMNonDeterminism = true, useVFS = true, useVNET = true, resetStaticState = true, separateClassLoader = true, useJEE = true) 
public class NativeRegExp_ESTest extends NativeRegExp_ESTest_scaffolding {

  @Test(timeout = 4000)
  public void test00()  throws Throwable  {
      Context context0 = Context.getCurrentContext();
      NativeArrayBuffer nativeArrayBuffer0 = NativeArrayBuffer.EMPTY_BUFFER;
      RECompiled rECompiled0 = NativeRegExp.compileRE(context0, "error reporter", "", false);
      NativeRegExp nativeRegExp0 = new NativeRegExp(nativeArrayBuffer0, rECompiled0);
      rECompiled0.flags = 100;
      String string0 = nativeRegExp0.toString();
      assertEquals("/error reporter/m", string0);
  }

  @Test(timeout = 4000)
  public void test01()  throws Throwable  {
      Context context0 = Context.getCurrentContext();
      NativeArrayBuffer nativeArrayBuffer0 = NativeArrayBuffer.EMPTY_BUFFER;
      RECompiled rECompiled0 = NativeRegExp.compileRE(context0, "error reporter", "", false);
      NativeRegExp nativeRegExp0 = new NativeRegExp(nativeArrayBuffer0, rECompiled0);
      rECompiled0.flags = 100;
      rECompiled0.flags = 2;
      String string0 = nativeRegExp0.toString();
      assertEquals("/error reporter/i", string0);
  }

  @Test(timeout = 4000)
  public void test02()  throws Throwable  {
      NativeRegExp nativeRegExp0 = new NativeRegExp();
      nativeRegExp0.setInstanceIdValue(4, nativeRegExp0);
      assertEquals(2, NativeRegExp.JSREG_FOLD);
  }

  @Test(timeout = 4000)
  public void test03()  throws Throwable  {
      Context context0 = Context.getCurrentContext();
      NativeArrayBuffer nativeArrayBuffer0 = NativeArrayBuffer.EMPTY_BUFFER;
      RECompiled rECompiled0 = NativeRegExp.compileRE(context0, "error reporter", "", false);
      NativeRegExp nativeRegExp0 = new NativeRegExp(nativeArrayBuffer0, rECompiled0);
      // Undeclared exception!
      try { 
        nativeRegExp0.setInstanceIdValue(45, nativeArrayBuffer0);
        fail("Expecting exception: IllegalStateException");
      
      } catch(IllegalStateException e) {
         //
         // 45
         //
         verifyException("org.mozilla.javascript.IdScriptableObject", e);
      }
  }

  @Test(timeout = 4000)
  public void test04()  throws Throwable  {
      NativeRegExp nativeRegExp0 = new NativeRegExp();
      nativeRegExp0.setInstanceIdAttributes(1, 1);
      assertEquals(2, NativeRegExp.JSREG_FOLD);
  }

  @Test(timeout = 4000)
  public void test05()  throws Throwable  {
      boolean boolean0 = NativeRegExp.isDigit('o');
      assertFalse(boolean0);
  }

  @Test(timeout = 4000)
  public void test06()  throws Throwable  {
      NativeInt8Array nativeInt8Array0 = new NativeInt8Array();
      ContextFactory contextFactory0 = ContextFactory.getGlobal();
      Context context0 = contextFactory0.enterContext();
      RECompiled rECompiled0 = NativeRegExp.compileRE(context0, "", "", true);
      NativeRegExp nativeRegExp0 = new NativeRegExp(nativeInt8Array0, rECompiled0);
      // Undeclared exception!
      try { 
        nativeRegExp0.initPrototypeId(0);
        fail("Expecting exception: IllegalArgumentException");
      
      } catch(IllegalArgumentException e) {
         //
         // 0
         //
         verifyException("org.mozilla.javascript.regexp.NativeRegExp", e);
      }
  }

  @Test(timeout = 4000)
  public void test07()  throws Throwable  {
      NativeUint8ClampedArray nativeUint8ClampedArray0 = new NativeUint8ClampedArray(0);
      NativeRegExp nativeRegExp0 = new NativeRegExp(nativeUint8ClampedArray0, (RECompiled) null);
      // Undeclared exception!
      try { 
        nativeRegExp0.getInstanceIdValue(0);
        fail("Expecting exception: IllegalStateException");
      
      } catch(IllegalStateException e) {
         //
         // 0
         //
         verifyException("org.mozilla.javascript.IdScriptableObject", e);
      }
  }

  @Test(timeout = 4000)
  public void test08()  throws Throwable  {
      NativeRegExp nativeRegExp0 = new NativeRegExp();
      // Undeclared exception!
      try { 
        nativeRegExp0.getInstanceIdValue(4);
        fail("Expecting exception: NullPointerException");
      
      } catch(NullPointerException e) {
         //
         // no message in exception (getMessage() returned null)
         //
         verifyException("org.mozilla.javascript.regexp.NativeRegExp", e);
      }
  }

  @Test(timeout = 4000)
  public void test09()  throws Throwable  {
      NativeRegExp nativeRegExp0 = new NativeRegExp();
      Object object0 = nativeRegExp0.getInstanceIdValue(1);
      assertEquals(0.0, object0);
  }

  @Test(timeout = 4000)
  public void test10()  throws Throwable  {
      NativeRegExp nativeRegExp0 = new NativeRegExp();
      // Undeclared exception!
      try { 
        nativeRegExp0.getFlags();
        fail("Expecting exception: NullPointerException");
      
      } catch(NullPointerException e) {
         //
         // no message in exception (getMessage() returned null)
         //
         verifyException("org.mozilla.javascript.regexp.NativeRegExp", e);
      }
  }

  @Test(timeout = 4000)
  public void test11()  throws Throwable  {
      Context context0 = Context.getCurrentContext();
      NativeArrayBuffer nativeArrayBuffer0 = NativeArrayBuffer.EMPTY_BUFFER;
      RECompiled rECompiled0 = NativeRegExp.compileRE(context0, "error reporter", "", false);
      NativeRegExp nativeRegExp0 = new NativeRegExp(nativeArrayBuffer0, rECompiled0);
      // Undeclared exception!
      try { 
        nativeRegExp0.setInstanceIdAttributes((-2269), 1198);
        fail("Expecting exception: IllegalArgumentException");
      
      } catch(IllegalArgumentException e) {
         //
         // -2269
         //
         verifyException("org.mozilla.javascript.IdScriptableObject", e);
      }
  }

  @Test(timeout = 4000)
  public void test12()  throws Throwable  {
      NativeRegExp nativeRegExp0 = new NativeRegExp();
      int int0 = nativeRegExp0.findPrototypeId("toSource");
      assertEquals(3, int0);
  }

  @Test(timeout = 4000)
  public void test13()  throws Throwable  {
      NativeRegExp nativeRegExp0 = new NativeRegExp();
      int int0 = nativeRegExp0.findPrototypeId("toFixed");
      assertEquals(0, int0);
  }

  @Test(timeout = 4000)
  public void test14()  throws Throwable  {
      NativeRegExp nativeRegExp0 = new NativeRegExp();
      int int0 = nativeRegExp0.findPrototypeId("object");
      assertEquals(0, int0);
  }

  @Test(timeout = 4000)
  public void test15()  throws Throwable  {
      NativeArrayBuffer nativeArrayBuffer0 = NativeArrayBuffer.EMPTY_BUFFER;
      RECompiled rECompiled0 = new RECompiled("() {");
      NativeRegExp nativeRegExp0 = new NativeRegExp(nativeArrayBuffer0, rECompiled0);
      Object[] objectArray0 = nativeRegExp0.getAllIds();
      assertEquals(5, objectArray0.length);
  }

  @Test(timeout = 4000)
  public void test16()  throws Throwable  {
      NativeInt8Array nativeInt8Array0 = new NativeInt8Array();
      ContextFactory contextFactory0 = ContextFactory.getGlobal();
      Context context0 = contextFactory0.enterContext();
      RECompiled rECompiled0 = NativeRegExp.compileRE(context0, "", "", true);
      NativeRegExp nativeRegExp0 = new NativeRegExp(nativeInt8Array0, rECompiled0);
      RegExpImpl regExpImpl0 = new RegExpImpl();
      int[] intArray0 = new int[10];
      NativeArray nativeArray0 = (NativeArray)nativeRegExp0.executeRegExp(context0, nativeInt8Array0, regExpImpl0, "", intArray0, 52);
      assertEquals(1, ScriptableObject.READONLY);
  }

  @Test(timeout = 4000)
  public void test17()  throws Throwable  {
      Context context0 = Context.getCurrentContext();
      NativeArrayBuffer nativeArrayBuffer0 = NativeArrayBuffer.EMPTY_BUFFER;
      RECompiled rECompiled0 = NativeRegExp.compileRE(context0, "error reporter", "", false);
      NativeRegExp nativeRegExp0 = new NativeRegExp(nativeArrayBuffer0, rECompiled0);
      RegExpImpl regExpImpl0 = new RegExpImpl();
      int[] intArray0 = new int[8];
      intArray0[0] = 14;
      Object object0 = nativeRegExp0.executeRegExp(context0, (Scriptable) null, regExpImpl0, "s_@rdcQc|x", intArray0, 17);
      assertNull(object0);
  }

  @Test(timeout = 4000)
  public void test18()  throws Throwable  {
      NativeInt8Array nativeInt8Array0 = new NativeInt8Array();
      ContextFactory contextFactory0 = ContextFactory.getGlobal();
      Context context0 = contextFactory0.enterContext();
      RECompiled rECompiled0 = NativeRegExp.compileRE(context0, "", "", true);
      assertNotNull(rECompiled0);
      
      NativeRegExp nativeRegExp0 = new NativeRegExp(nativeInt8Array0, rECompiled0);
      RegExpImpl regExpImpl0 = new RegExpImpl();
      int[] intArray0 = new int[10];
      boolean[] booleanArray0 = new boolean[6];
      String[][] stringArray0 = new String[9][4];
      int int0 = regExpImpl0.find_split(context0, nativeRegExp0, "getParamOrVarConst", "getParamOrVarConst", nativeRegExp0, intArray0, intArray0, booleanArray0, stringArray0);
      assertArrayEquals(new int[] {0, 0, 0, 0, 0, 0, 0, 0, 0, 0}, intArray0);
      assertEquals(1, int0);
  }

  @Test(timeout = 4000)
  public void test19()  throws Throwable  {
      NativeRegExp nativeRegExp0 = new NativeRegExp();
      Object[] objectArray0 = new Object[6];
      NativeArray nativeArray0 = new NativeArray(objectArray0);
      IdFunctionObject idFunctionObject0 = new IdFunctionObject(nativeRegExp0, nativeArray0, 4467, 55);
      ContextFactory contextFactory0 = new ContextFactory();
      Context context0 = contextFactory0.enterContext();
      // Undeclared exception!
      try { 
        nativeRegExp0.execIdCall(idFunctionObject0, context0, nativeArray0, idFunctionObject0, context0.emptyArgs);
        fail("Expecting exception: NullPointerException");
      
      } catch(NullPointerException e) {
         //
         // no message in exception (getMessage() returned null)
         //
         verifyException("org.mozilla.javascript.regexp.NativeRegExp", e);
      }
  }

  @Test(timeout = 4000)
  public void test20()  throws Throwable  {
      ContextFactory contextFactory0 = new ContextFactory();
      Context context0 = contextFactory0.enterContext();
      RECompiled rECompiled0 = NativeRegExp.compileRE(context0, "language version", "m", true);
      assertNotNull(rECompiled0);
  }

  @Test(timeout = 4000)
  public void test21()  throws Throwable  {
      Context context0 = Context.enter();
      // Undeclared exception!
      try { 
        NativeRegExp.compileRE(context0, "out of range short", "ignoreCase", true);
        fail("Expecting exception: RuntimeException");
      
      } catch(RuntimeException e) {
         //
         // SyntaxError: invalid flag after regular expression
         //
         verifyException("org.mozilla.javascript.ScriptRuntime", e);
      }
  }

  @Test(timeout = 4000)
  public void test22()  throws Throwable  {
      NativeArrayBuffer nativeArrayBuffer0 = NativeArrayBuffer.EMPTY_BUFFER;
      RECompiled rECompiled0 = new RECompiled("() {");
      NativeRegExp nativeRegExp0 = new NativeRegExp(nativeArrayBuffer0, rECompiled0);
      Context context0 = Context.getCurrentContext();
      Object[] objectArray0 = new Object[4];
      // Undeclared exception!
      try { 
        nativeRegExp0.compile(context0, nativeArrayBuffer0, objectArray0);
        fail("Expecting exception: RuntimeException");
      
      } catch(RuntimeException e) {
         //
         // SyntaxError: invalid flag after regular expression
         //
         verifyException("org.mozilla.javascript.ScriptRuntime", e);
      }
  }

  @Test(timeout = 4000)
  public void test23()  throws Throwable  {
      NativeRegExp nativeRegExp0 = new NativeRegExp();
      NativeJavaClass nativeJavaClass0 = new NativeJavaClass();
      Object[] objectArray0 = new Object[4];
      objectArray0[0] = (Object) nativeRegExp0;
      // Undeclared exception!
      try { 
        nativeRegExp0.compile((Context) null, nativeJavaClass0, objectArray0);
        fail("Expecting exception: RuntimeException");
      
      } catch(RuntimeException e) {
         //
         // TypeError: Only one argument may be specified if the first argument to RegExp.prototype.compile is a RegExp object.
         //
         verifyException("org.mozilla.javascript.ScriptRuntime", e);
      }
  }

  @Test(timeout = 4000)
  public void test24()  throws Throwable  {
      Context context0 = Context.getCurrentContext();
      NativeArrayBuffer nativeArrayBuffer0 = NativeArrayBuffer.EMPTY_BUFFER;
      RECompiled rECompiled0 = NativeRegExp.compileRE(context0, "error reporter", "", false);
      NativeRegExp nativeRegExp0 = new NativeRegExp(nativeArrayBuffer0, rECompiled0);
      nativeRegExp0.compile(context0, nativeArrayBuffer0, context0.emptyArgs);
      String string0 = nativeRegExp0.toString();
      assertEquals("/(?:)/", string0);
  }

  @Test(timeout = 4000)
  public void test25()  throws Throwable  {
      ContextFactory contextFactory0 = ContextFactory.getGlobal();
      Context context0 = contextFactory0.enterContext();
      NativeRegExp nativeRegExp0 = new NativeRegExp();
      NativeObject nativeObject0 = new NativeObject();
      // Undeclared exception!
      try { 
        nativeRegExp0.call(context0, nativeObject0, nativeObject0, context0.emptyArgs);
        fail("Expecting exception: NullPointerException");
      
      } catch(NullPointerException e) {
         //
         // no message in exception (getMessage() returned null)
         //
         verifyException("org.mozilla.javascript.regexp.NativeRegExp", e);
      }
  }
}
