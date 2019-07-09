/*
 * This file was automatically generated by EvoSuite
 * Tue Jul 31 23:05:04 GMT 2018
 */

package org.mozilla.javascript;

import org.junit.Test;
import static org.junit.Assert.*;
import static org.evosuite.runtime.EvoAssertions.*;
import org.evosuite.runtime.EvoRunner;
import org.evosuite.runtime.EvoRunnerParameters;
import org.junit.runner.RunWith;
import org.mozilla.javascript.Context;
import org.mozilla.javascript.ContextFactory;
import org.mozilla.javascript.ImporterTopLevel;
import org.mozilla.javascript.NativeCallSite;
import org.mozilla.javascript.NativeJavaClass;
import org.mozilla.javascript.ScriptStackElement;
import org.mozilla.javascript.ScriptableObject;
import org.mozilla.javascript.typedarrays.NativeArrayBuffer;

@RunWith(EvoRunner.class) @EvoRunnerParameters(mockJVMNonDeterminism = true, useVFS = true, useVNET = true, resetStaticState = true, separateClassLoader = false, useJEE = true) 
public class NativeCallSite_ESTest extends NativeCallSite_ESTest_scaffolding {

  @Test(timeout = 4000)
  public void test00()  throws Throwable  {
      NativeJavaClass nativeJavaClass0 = new NativeJavaClass();
      NativeCallSite nativeCallSite0 = NativeCallSite.make(nativeJavaClass0, nativeJavaClass0);
      ScriptStackElement scriptStackElement0 = new ScriptStackElement("]\n", (String) null, 14);
      nativeCallSite0.setElement(scriptStackElement0);
      String string0 = nativeCallSite0.toString();
      assertEquals("@]\n:14", string0);
  }

  @Test(timeout = 4000)
  public void test01()  throws Throwable  {
      NativeJavaClass nativeJavaClass0 = new NativeJavaClass();
      NativeCallSite nativeCallSite0 = NativeCallSite.make(nativeJavaClass0, nativeJavaClass0);
      String string0 = nativeCallSite0.toString();
      assertEquals("", string0);
  }

  @Test(timeout = 4000)
  public void test02()  throws Throwable  {
      NativeJavaClass nativeJavaClass0 = new NativeJavaClass();
      NativeCallSite nativeCallSite0 = NativeCallSite.make(nativeJavaClass0, nativeJavaClass0);
      ScriptStackElement scriptStackElement0 = new ScriptStackElement("2y/=PN{=xyeSW^^4eS9", "2y/=PN{=xyeSW^^4eS9", 4);
      nativeCallSite0.setElement(scriptStackElement0);
      nativeCallSite0.activatePrototypeMap(3086);
      // Undeclared exception!
      try { 
        ScriptableObject.isFalse(nativeCallSite0);
        fail("Expecting exception: RuntimeException");
      
      } catch(RuntimeException e) {
         //
         // No Context associated with current Thread
         //
         verifyException("org.mozilla.javascript.Context", e);
      }
  }

  @Test(timeout = 4000)
  public void test03()  throws Throwable  {
      ContextFactory contextFactory0 = ContextFactory.getGlobal();
      Context context0 = new Context(contextFactory0);
      ImporterTopLevel importerTopLevel0 = null;
      try {
        importerTopLevel0 = new ImporterTopLevel(context0, true);
        fail("Expecting exception: RuntimeException");
      
      } catch(RuntimeException e) {
         //
         // No Context associated with current Thread
         //
         verifyException("org.mozilla.javascript.Context", e);
      }
  }

  @Test(timeout = 4000)
  public void test04()  throws Throwable  {
      NativeArrayBuffer nativeArrayBuffer0 = new NativeArrayBuffer();
      NativeJavaClass nativeJavaClass0 = new NativeJavaClass();
      NativeCallSite nativeCallSite0 = NativeCallSite.make(nativeJavaClass0, nativeJavaClass0);
      ScriptStackElement scriptStackElement0 = new ScriptStackElement("ArrayBuffer", "ArrayBuffer", 8);
      nativeCallSite0.setElement(scriptStackElement0);
      // Undeclared exception!
      try { 
        nativeCallSite0.exportAsJSClass(13, nativeArrayBuffer0, true);
        fail("Expecting exception: RuntimeException");
      
      } catch(RuntimeException e) {
         //
         // No Context associated with current Thread
         //
         verifyException("org.mozilla.javascript.Context", e);
      }
  }

  @Test(timeout = 4000)
  public void test05()  throws Throwable  {
      NativeJavaClass nativeJavaClass0 = new NativeJavaClass();
      NativeCallSite nativeCallSite0 = NativeCallSite.make(nativeJavaClass0, nativeJavaClass0);
      int int0 = nativeCallSite0.findPrototypeId(",Z&.kKOwEweuD");
      assertEquals(0, int0);
  }

  @Test(timeout = 4000)
  public void test06()  throws Throwable  {
      NativeJavaClass nativeJavaClass0 = new NativeJavaClass();
      NativeCallSite nativeCallSite0 = NativeCallSite.make(nativeJavaClass0, nativeJavaClass0);
      int int0 = nativeCallSite0.findPrototypeId("|J_zkw%elg");
      assertEquals(0, int0);
  }

  @Test(timeout = 4000)
  public void test07()  throws Throwable  {
      NativeJavaClass nativeJavaClass0 = new NativeJavaClass();
      NativeCallSite nativeCallSite0 = NativeCallSite.make(nativeJavaClass0, nativeJavaClass0);
      nativeCallSite0.activatePrototypeMap(2998);
      // Undeclared exception!
      try { 
        nativeCallSite0.getIds();
        fail("Expecting exception: RuntimeException");
      
      } catch(RuntimeException e) {
         //
         // No Context associated with current Thread
         //
         verifyException("org.mozilla.javascript.Context", e);
      }
  }

  @Test(timeout = 4000)
  public void test08()  throws Throwable  {
      NativeArrayBuffer nativeArrayBuffer0 = new NativeArrayBuffer();
      NativeJavaClass nativeJavaClass0 = new NativeJavaClass();
      NativeCallSite nativeCallSite0 = NativeCallSite.make(nativeJavaClass0, nativeJavaClass0);
      // Undeclared exception!
      try { 
        nativeCallSite0.exportAsJSClass(13, nativeArrayBuffer0, true);
        fail("Expecting exception: RuntimeException");
      
      } catch(RuntimeException e) {
         //
         // No Context associated with current Thread
         //
         verifyException("org.mozilla.javascript.Context", e);
      }
  }

  @Test(timeout = 4000)
  public void test09()  throws Throwable  {
      NativeArrayBuffer nativeArrayBuffer0 = NativeArrayBuffer.EMPTY_BUFFER;
      NativeJavaClass nativeJavaClass0 = new NativeJavaClass();
      NativeCallSite nativeCallSite0 = NativeCallSite.make(nativeJavaClass0, nativeJavaClass0);
      // Undeclared exception!
      try { 
        nativeCallSite0.exportAsJSClass(13, nativeArrayBuffer0, true);
        fail("Expecting exception: RuntimeException");
      
      } catch(RuntimeException e) {
         //
         // No Context associated with current Thread
         //
         verifyException("org.mozilla.javascript.Context", e);
      }
  }

  @Test(timeout = 4000)
  public void test10()  throws Throwable  {
      NativeArrayBuffer nativeArrayBuffer0 = new NativeArrayBuffer();
      NativeJavaClass nativeJavaClass0 = new NativeJavaClass();
      NativeCallSite nativeCallSite0 = NativeCallSite.make(nativeJavaClass0, nativeJavaClass0);
      // Undeclared exception!
      try { 
        nativeCallSite0.exportAsJSClass(13, nativeArrayBuffer0, false);
        fail("Expecting exception: RuntimeException");
      
      } catch(RuntimeException e) {
         //
         // No Context associated with current Thread
         //
         verifyException("org.mozilla.javascript.Context", e);
      }
  }

  @Test(timeout = 4000)
  public void test11()  throws Throwable  {
      NativeArrayBuffer nativeArrayBuffer0 = NativeArrayBuffer.EMPTY_BUFFER;
      NativeJavaClass nativeJavaClass0 = new NativeJavaClass();
      NativeCallSite nativeCallSite0 = NativeCallSite.make(nativeJavaClass0, nativeJavaClass0);
      // Undeclared exception!
      try { 
        nativeCallSite0.exportAsJSClass(13, nativeArrayBuffer0, false);
        fail("Expecting exception: RuntimeException");
      
      } catch(RuntimeException e) {
         //
         // No Context associated with current Thread
         //
         verifyException("org.mozilla.javascript.Context", e);
      }
  }
}
