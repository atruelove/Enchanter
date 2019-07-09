/*
 * This file was automatically generated by EvoSuite
 * Wed Aug 01 00:16:15 GMT 2018
 */

package org.mozilla.javascript.typedarrays;

import org.junit.Test;
import static org.junit.Assert.*;
import static org.evosuite.runtime.EvoAssertions.*;
import org.evosuite.runtime.EvoRunner;
import org.evosuite.runtime.EvoRunnerParameters;
import org.junit.runner.RunWith;
import org.mozilla.javascript.Context;
import org.mozilla.javascript.IdFunctionObject;
import org.mozilla.javascript.IdFunctionObjectES6;
import org.mozilla.javascript.NativeContinuation;
import org.mozilla.javascript.ScriptableObject;
import org.mozilla.javascript.typedarrays.NativeArrayBuffer;
import org.mozilla.javascript.typedarrays.NativeInt32Array;
import org.mozilla.javascript.typedarrays.NativeTypedArrayView;
import org.mozilla.javascript.typedarrays.NativeUint8Array;

@RunWith(EvoRunner.class) @EvoRunnerParameters(mockJVMNonDeterminism = true, useVFS = true, useVNET = true, resetStaticState = true, separateClassLoader = false, useJEE = true) 
public class NativeInt32Array_ESTest extends NativeInt32Array_ESTest_scaffolding {

  @Test(timeout = 4000)
  public void test0()  throws Throwable  {
      NativeInt32Array nativeInt32Array0 = new NativeInt32Array();
      // Undeclared exception!
      try { 
        nativeInt32Array0.set(0, (Integer) nativeInt32Array0.READONLY);
        fail("Expecting exception: IndexOutOfBoundsException");
      
      } catch(IndexOutOfBoundsException e) {
         //
         // no message in exception (getMessage() returned null)
         //
         verifyException("org.mozilla.javascript.typedarrays.NativeInt32Array", e);
      }
  }

  @Test(timeout = 4000)
  public void test1()  throws Throwable  {
      NativeInt32Array nativeInt32Array0 = new NativeInt32Array();
      NativeUint8Array nativeUint8Array0 = new NativeUint8Array();
      IdFunctionObject idFunctionObject0 = new IdFunctionObject(nativeInt32Array0, nativeInt32Array0, 1, 4);
      // Undeclared exception!
      try { 
        nativeInt32Array0.realThis(nativeUint8Array0, idFunctionObject0);
        fail("Expecting exception: RuntimeException");
      
      } catch(RuntimeException e) {
         //
         // TypeError: Method \"\" called on incompatible object.
         //
         verifyException("org.mozilla.javascript.ScriptRuntime", e);
      }
  }

  @Test(timeout = 4000)
  public void test2()  throws Throwable  {
      NativeInt32Array nativeInt32Array0 = new NativeInt32Array();
      NativeContinuation nativeContinuation0 = new NativeContinuation();
      IdFunctionObjectES6 idFunctionObjectES6_0 = new IdFunctionObjectES6(nativeInt32Array0, nativeInt32Array0, 13, "j9A5/QXE|?X~L", 4, nativeContinuation0);
      NativeTypedArrayView nativeTypedArrayView0 = nativeInt32Array0.realThis(nativeInt32Array0, idFunctionObjectES6_0);
      assertEquals(0, ScriptableObject.EMPTY);
  }

  @Test(timeout = 4000)
  public void test3()  throws Throwable  {
      NativeInt32Array nativeInt32Array0 = new NativeInt32Array();
      Object object0 = nativeInt32Array0.js_set(217, "");
      assertNotNull(object0);
  }

  @Test(timeout = 4000)
  public void test4()  throws Throwable  {
      NativeInt32Array nativeInt32Array0 = new NativeInt32Array(1288);
      Integer integer0 = nativeInt32Array0.set(327, (Integer) 8);
      assertNull(integer0);
  }

  @Test(timeout = 4000)
  public void test5()  throws Throwable  {
      NativeInt32Array nativeInt32Array0 = new NativeInt32Array();
      Object object0 = nativeInt32Array0.getArrayElement(4);
      assertNotNull(object0);
  }

  @Test(timeout = 4000)
  public void test6()  throws Throwable  {
      NativeArrayBuffer nativeArrayBuffer0 = NativeArrayBuffer.EMPTY_BUFFER;
      NativeInt32Array nativeInt32Array0 = new NativeInt32Array(nativeArrayBuffer0, 2, 987);
      Context context0 = Context.getCurrentContext();
      // Undeclared exception!
      try { 
        NativeInt32Array.init(context0, nativeInt32Array0, true);
        fail("Expecting exception: RuntimeException");
      
      } catch(RuntimeException e) {
         //
         // No Context associated with current Thread
         //
         verifyException("org.mozilla.javascript.Context", e);
      }
  }

  @Test(timeout = 4000)
  public void test7()  throws Throwable  {
      NativeArrayBuffer nativeArrayBuffer0 = NativeArrayBuffer.EMPTY_BUFFER;
      NativeInt32Array nativeInt32Array0 = new NativeInt32Array(nativeArrayBuffer0, (-24), 13);
      // Undeclared exception!
      try { 
        nativeInt32Array0.get(1);
        fail("Expecting exception: ArrayIndexOutOfBoundsException");
      
      } catch(ArrayIndexOutOfBoundsException e) {
         //
         // -20
         //
         verifyException("org.mozilla.javascript.typedarrays.ByteIo", e);
      }
  }

  @Test(timeout = 4000)
  public void test8()  throws Throwable  {
      NativeInt32Array nativeInt32Array0 = new NativeInt32Array(1288);
      NativeArrayBuffer nativeArrayBuffer0 = NativeArrayBuffer.EMPTY_BUFFER;
      NativeTypedArrayView nativeTypedArrayView0 = nativeInt32Array0.construct(nativeArrayBuffer0, 740, 0);
      assertEquals(740, nativeTypedArrayView0.getByteOffset());
      assertEquals(0, nativeTypedArrayView0.getArrayLength());
  }

  @Test(timeout = 4000)
  public void test9()  throws Throwable  {
      NativeInt32Array nativeInt32Array0 = new NativeInt32Array();
      // Undeclared exception!
      try { 
        nativeInt32Array0.get(217);
        fail("Expecting exception: IndexOutOfBoundsException");
      
      } catch(IndexOutOfBoundsException e) {
         //
         // no message in exception (getMessage() returned null)
         //
         verifyException("org.mozilla.javascript.typedarrays.NativeInt32Array", e);
      }
  }
}
