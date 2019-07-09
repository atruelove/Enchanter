/*
 * This file was automatically generated by EvoSuite
 * Tue Jul 31 19:22:58 GMT 2018
 */

package org.mozilla.javascript;

import org.junit.Test;
import static org.junit.Assert.*;
import static org.evosuite.runtime.EvoAssertions.*;
import java.nio.CharBuffer;
import org.evosuite.runtime.EvoRunner;
import org.evosuite.runtime.EvoRunnerParameters;
import org.junit.runner.RunWith;
import org.mozilla.javascript.Context;
import org.mozilla.javascript.ContextFactory;
import org.mozilla.javascript.IdFunctionObjectES6;
import org.mozilla.javascript.NativeString;
import org.mozilla.javascript.Scriptable;
import org.mozilla.javascript.ScriptableObject;
import org.mozilla.javascript.SymbolKey;
import org.mozilla.javascript.typedarrays.NativeArrayBuffer;
import org.mozilla.javascript.typedarrays.NativeInt16Array;

@RunWith(EvoRunner.class) @EvoRunnerParameters(mockJVMNonDeterminism = true, useVFS = true, useVNET = true, resetStaticState = true, separateClassLoader = true, useJEE = true) 
public class NativeString_ESTest extends NativeString_ESTest_scaffolding {

  @Test(timeout = 4000)
  public void test00()  throws Throwable  {
      StringBuffer stringBuffer0 = new StringBuffer(" of ");
      NativeString nativeString0 = new NativeString(stringBuffer0);
      CharSequence charSequence0 = nativeString0.toCharSequence();
      assertSame(charSequence0, stringBuffer0);
  }

  @Test(timeout = 4000)
  public void test01()  throws Throwable  {
      char[] charArray0 = new char[20];
      CharBuffer charBuffer0 = CharBuffer.wrap(charArray0);
      NativeString nativeString0 = new NativeString(charBuffer0);
      nativeString0.put(4, (Scriptable) nativeString0, (Object) charBuffer0);
      assertEquals("\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000", charBuffer0.toString());
  }

  @Test(timeout = 4000)
  public void test02()  throws Throwable  {
      StringBuffer stringBuffer0 = new StringBuffer();
      NativeString nativeString0 = new NativeString(stringBuffer0);
      NativeInt16Array nativeInt16Array0 = new NativeInt16Array(1);
      nativeString0.put(1153, (Scriptable) nativeInt16Array0, (Object) nativeString0);
      assertEquals(2, nativeInt16Array0.getByteLength());
  }

  @Test(timeout = 4000)
  public void test03()  throws Throwable  {
      StringBuilder stringBuilder0 = new StringBuilder(0);
      stringBuilder0.append("s?uN{^\"&ofH}{NT6N");
      NativeString nativeString0 = new NativeString(stringBuilder0);
      boolean boolean0 = nativeString0.has(4, (Scriptable) null);
      assertTrue(boolean0);
  }

  @Test(timeout = 4000)
  public void test04()  throws Throwable  {
      StringBuilder stringBuilder0 = new StringBuilder(0);
      NativeString nativeString0 = new NativeString(stringBuilder0);
      boolean boolean0 = nativeString0.has(4, (Scriptable) null);
      assertFalse(boolean0);
  }

  @Test(timeout = 4000)
  public void test05()  throws Throwable  {
      char[] charArray0 = new char[6];
      CharBuffer charBuffer0 = CharBuffer.wrap(charArray0);
      NativeString nativeString0 = new NativeString(charBuffer0);
      int int0 = nativeString0.getLength();
      assertEquals(6, int0);
  }

  @Test(timeout = 4000)
  public void test06()  throws Throwable  {
      NativeString nativeString0 = new NativeString((CharSequence) null);
      // Undeclared exception!
      try { 
        nativeString0.getInstanceIdValue(1);
        fail("Expecting exception: NullPointerException");
      
      } catch(NullPointerException e) {
         //
         // no message in exception (getMessage() returned null)
         //
         verifyException("org.mozilla.javascript.NativeString", e);
      }
  }

  @Test(timeout = 4000)
  public void test07()  throws Throwable  {
      NativeString nativeString0 = new NativeString((CharSequence) null);
      // Undeclared exception!
      try { 
        nativeString0.getInstanceIdValue(0);
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
      StringBuilder stringBuilder0 = new StringBuilder();
      NativeString nativeString0 = new NativeString(stringBuilder0);
      // Undeclared exception!
      try { 
        nativeString0.getInstanceIdName(88);
        fail("Expecting exception: IllegalArgumentException");
      
      } catch(IllegalArgumentException e) {
         //
         // 88
         //
         verifyException("org.mozilla.javascript.IdScriptableObject", e);
      }
  }

  @Test(timeout = 4000)
  public void test09()  throws Throwable  {
      StringBuilder stringBuilder0 = new StringBuilder(0);
      stringBuilder0.append("s?uN{^\"&ofH}{NT6N");
      NativeString nativeString0 = new NativeString(stringBuilder0);
      Object object0 = nativeString0.get(4, (Scriptable) null);
      assertEquals("{", object0);
  }

  @Test(timeout = 4000)
  public void test10()  throws Throwable  {
      StringBuilder stringBuilder0 = new StringBuilder(0);
      NativeString nativeString0 = new NativeString(stringBuilder0);
      Object object0 = nativeString0.get(4, (Scriptable) null);
      assertNotNull(object0);
  }

  @Test(timeout = 4000)
  public void test11()  throws Throwable  {
      StringBuilder stringBuilder0 = new StringBuilder(0);
      NativeString nativeString0 = new NativeString(stringBuilder0);
      SymbolKey symbolKey0 = SymbolKey.UNSCOPABLES;
      int int0 = nativeString0.findPrototypeId(symbolKey0);
      assertEquals(0, int0);
  }

  @Test(timeout = 4000)
  public void test12()  throws Throwable  {
      NativeString nativeString0 = new NativeString((CharSequence) null);
      int int0 = nativeString0.findPrototypeId("a>LK7D|!R");
      assertEquals(0, int0);
  }

  @Test(timeout = 4000)
  public void test13()  throws Throwable  {
      NativeString nativeString0 = new NativeString((CharSequence) null);
      int int0 = nativeString0.findPrototypeId("a>7D|!R");
      assertEquals(0, int0);
  }

  @Test(timeout = 4000)
  public void test14()  throws Throwable  {
      NativeString nativeString0 = new NativeString("a");
      int int0 = nativeString0.findPrototypeId("}C_POy");
      assertEquals(0, int0);
  }

  @Test(timeout = 4000)
  public void test15()  throws Throwable  {
      StringBuffer stringBuffer0 = new StringBuffer();
      NativeString nativeString0 = new NativeString(stringBuffer0);
      NativeArrayBuffer nativeArrayBuffer0 = NativeArrayBuffer.EMPTY_BUFFER;
      IdFunctionObjectES6 idFunctionObjectES6_0 = new IdFunctionObjectES6(nativeString0, nativeArrayBuffer0, 2, "ArrayBuffer", 13, nativeString0);
      ContextFactory contextFactory0 = new ContextFactory();
      Context context0 = new Context(contextFactory0);
      // Undeclared exception!
      try { 
        nativeString0.execIdCall(idFunctionObjectES6_0, context0, idFunctionObjectES6_0, idFunctionObjectES6_0, (Object[]) null);
        fail("Expecting exception: IllegalArgumentException");
      
      } catch(IllegalArgumentException e) {
         //
         // BAD FUNCTION ID=2 MASTER=
         //
         verifyException("org.mozilla.javascript.IdFunctionObject", e);
      }
  }

  @Test(timeout = 4000)
  public void test16()  throws Throwable  {
      NativeString nativeString0 = new NativeString("");
      Context context0 = Context.enter();
      ScriptableObject scriptableObject0 = context0.initStandardObjects((ScriptableObject) nativeString0, false);
      // Undeclared exception!
      try { 
        nativeString0.exportAsJSClass(2, scriptableObject0, true);
        fail("Expecting exception: RuntimeException");
      
      } catch(RuntimeException e) {
         //
         // Cannot modify a property of a sealed object: java.lang.String@0000000517.
         //
         verifyException("org.mozilla.javascript.DefaultErrorReporter", e);
      }
  }
}
