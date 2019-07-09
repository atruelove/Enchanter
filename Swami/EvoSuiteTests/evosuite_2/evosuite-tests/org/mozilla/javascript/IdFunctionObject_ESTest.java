/*
 * This file was automatically generated by EvoSuite
 * Wed Aug 01 03:54:24 GMT 2018
 */

package org.mozilla.javascript;

import org.junit.Test;
import static org.junit.Assert.*;
import static org.evosuite.runtime.EvoAssertions.*;
import org.evosuite.runtime.EvoRunner;
import org.evosuite.runtime.EvoRunnerParameters;
import org.junit.runner.RunWith;
import org.mozilla.javascript.Context;
import org.mozilla.javascript.IdFunctionCall;
import org.mozilla.javascript.IdFunctionObject;
import org.mozilla.javascript.IdFunctionObjectES6;
import org.mozilla.javascript.ImporterTopLevel;
import org.mozilla.javascript.NativeGenerator;
import org.mozilla.javascript.NativeIterator;
import org.mozilla.javascript.typedarrays.NativeArrayBuffer;
import org.mozilla.javascript.typedarrays.NativeFloat32Array;
import org.mozilla.javascript.typedarrays.NativeInt16Array;
import org.mozilla.javascript.typedarrays.NativeUint8Array;

@RunWith(EvoRunner.class) @EvoRunnerParameters(mockJVMNonDeterminism = true, useVFS = true, useVNET = true, resetStaticState = true, separateClassLoader = true, useJEE = true) 
public class IdFunctionObject_ESTest extends IdFunctionObject_ESTest_scaffolding {

  @Test(timeout = 4000)
  public void test0()  throws Throwable  {
      Context context0 = Context.enter();
      ImporterTopLevel importerTopLevel0 = new ImporterTopLevel(context0);
      IdFunctionObject idFunctionObject0 = new IdFunctionObject(importerTopLevel0, context0, 2, 3351);
      // Undeclared exception!
      try { 
        idFunctionObject0.call(context0, importerTopLevel0, importerTopLevel0, context0.emptyArgs);
        fail("Expecting exception: IllegalArgumentException");
      
      } catch(IllegalArgumentException e) {
         //
         // BAD FUNCTION ID=2 MASTER=org.mozilla.javascript.ImporterTopLevel@3
         //
         verifyException("org.mozilla.javascript.IdFunctionObject", e);
      }
  }

  @Test(timeout = 4000)
  public void test1()  throws Throwable  {
      NativeArrayBuffer nativeArrayBuffer0 = new NativeArrayBuffer();
      IdFunctionObject idFunctionObject0 = new IdFunctionObject(nativeArrayBuffer0, nativeArrayBuffer0, 112, "ArrayBuffer", 0, nativeArrayBuffer0);
      idFunctionObject0.getTag();
      assertEquals(112, idFunctionObject0.methodId());
      assertEquals(0, idFunctionObject0.getLength());
  }

  @Test(timeout = 4000)
  public void test2()  throws Throwable  {
      NativeFloat32Array nativeFloat32Array0 = new NativeFloat32Array();
      NativeGenerator nativeGenerator0 = NativeGenerator.init(nativeFloat32Array0, true);
      IdFunctionObject idFunctionObject0 = new IdFunctionObject(nativeGenerator0, nativeFloat32Array0, 4, "PR", 4, nativeFloat32Array0);
      idFunctionObject0.getPrototype();
      assertEquals(4, idFunctionObject0.methodId());
      assertEquals(4, idFunctionObject0.getArity());
  }

  @Test(timeout = 4000)
  public void test3()  throws Throwable  {
      NativeUint8Array nativeUint8Array0 = new NativeUint8Array();
      IdFunctionObject idFunctionObject0 = new IdFunctionObject(nativeUint8Array0, nativeUint8Array0, 13, "S,ol ", 8, nativeUint8Array0);
      String string0 = idFunctionObject0.decompile(1, 8);
      assertEquals(13, idFunctionObject0.methodId());
      assertEquals("function S,ol () { [native code for Uint8Array.S,ol , arity=8] }\n", string0);
  }

  @Test(timeout = 4000)
  public void test4()  throws Throwable  {
      NativeFloat32Array nativeFloat32Array0 = new NativeFloat32Array();
      NativeGenerator nativeGenerator0 = NativeGenerator.init(nativeFloat32Array0, true);
      IdFunctionObject idFunctionObject0 = new IdFunctionObject(nativeGenerator0, nativeFloat32Array0, 4, "PR", 4, nativeFloat32Array0);
      Context context0 = Context.getCurrentContext();
      // Undeclared exception!
      try { 
        idFunctionObject0.createObject(context0, nativeFloat32Array0);
        fail("Expecting exception: RuntimeException");
      
      } catch(RuntimeException e) {
         //
         // TypeError: \"PR\" is not a constructor.
         //
         verifyException("org.mozilla.javascript.ScriptRuntime", e);
      }
  }

  @Test(timeout = 4000)
  public void test5()  throws Throwable  {
      NativeUint8Array nativeUint8Array0 = new NativeUint8Array();
      IdFunctionObjectES6 idFunctionObjectES6_0 = null;
      try {
        idFunctionObjectES6_0 = new IdFunctionObjectES6(nativeUint8Array0, nativeUint8Array0, 0, (String) null, 2, nativeUint8Array0);
        fail("Expecting exception: IllegalArgumentException");
      
      } catch(IllegalArgumentException e) {
         //
         // no message in exception (getMessage() returned null)
         //
         verifyException("org.mozilla.javascript.IdFunctionObject", e);
      }
  }

  @Test(timeout = 4000)
  public void test6()  throws Throwable  {
      NativeInt16Array nativeInt16Array0 = new NativeInt16Array();
      NativeIterator.StopIteration nativeIterator_StopIteration0 = new NativeIterator.StopIteration();
      IdFunctionObjectES6 idFunctionObjectES6_0 = null;
      try {
        idFunctionObjectES6_0 = new IdFunctionObjectES6(nativeInt16Array0, nativeIterator_StopIteration0, 2, "", (-2199), nativeIterator_StopIteration0);
        fail("Expecting exception: IllegalArgumentException");
      
      } catch(IllegalArgumentException e) {
         //
         // no message in exception (getMessage() returned null)
         //
         verifyException("org.mozilla.javascript.IdFunctionObject", e);
      }
  }

  @Test(timeout = 4000)
  public void test7()  throws Throwable  {
      IdFunctionObject idFunctionObject0 = null;
      try {
        idFunctionObject0 = new IdFunctionObject((IdFunctionCall) null, (Object) null, (-2720), (-2720));
        fail("Expecting exception: IllegalArgumentException");
      
      } catch(IllegalArgumentException e) {
         //
         // no message in exception (getMessage() returned null)
         //
         verifyException("org.mozilla.javascript.IdFunctionObject", e);
      }
  }
}
