/*
 * This file was automatically generated by EvoSuite
 * Wed Aug 01 00:15:07 GMT 2018
 */

package org.mozilla.javascript.typedarrays;

import org.junit.Test;
import static org.junit.Assert.*;
import static org.evosuite.shaded.org.mockito.Mockito.*;
import static org.evosuite.runtime.EvoAssertions.*;
import java.util.Collection;
import java.util.Comparator;
import java.util.ListIterator;
import org.evosuite.runtime.EvoRunner;
import org.evosuite.runtime.EvoRunnerParameters;
import org.evosuite.runtime.ViolatedAssumptionAnswer;
import org.junit.runner.RunWith;
import org.mozilla.javascript.Context;
import org.mozilla.javascript.IdFunctionObject;
import org.mozilla.javascript.NativeArray;
import org.mozilla.javascript.NativeObject;
import org.mozilla.javascript.Scriptable;
import org.mozilla.javascript.ScriptableObject;
import org.mozilla.javascript.SymbolKey;
import org.mozilla.javascript.typedarrays.NativeArrayBuffer;
import org.mozilla.javascript.typedarrays.NativeFloat32Array;
import org.mozilla.javascript.typedarrays.NativeFloat64Array;
import org.mozilla.javascript.typedarrays.NativeInt16Array;
import org.mozilla.javascript.typedarrays.NativeInt32Array;
import org.mozilla.javascript.typedarrays.NativeInt8Array;
import org.mozilla.javascript.typedarrays.NativeUint16Array;
import org.mozilla.javascript.typedarrays.NativeUint32Array;
import org.mozilla.javascript.typedarrays.NativeUint8Array;
import org.mozilla.javascript.typedarrays.NativeUint8ClampedArray;

@RunWith(EvoRunner.class) @EvoRunnerParameters(mockJVMNonDeterminism = true, useVFS = true, useVNET = true, resetStaticState = true, separateClassLoader = false, useJEE = true) 
public class NativeTypedArrayView_ESTest extends NativeTypedArrayView_ESTest_scaffolding {

  @Test(timeout = 4000)
  public void test00()  throws Throwable  {
      NativeInt16Array nativeInt16Array0 = new NativeInt16Array(178);
      assertEquals(178, nativeInt16Array0.size());
      
      Object[] objectArray0 = nativeInt16Array0.toArray();
      Object[] objectArray1 = nativeInt16Array0.toArray(objectArray0);
      assertEquals(178, objectArray1.length);
      assertSame(objectArray1, objectArray0);
  }

  @Test(timeout = 4000)
  public void test01()  throws Throwable  {
      NativeUint16Array nativeUint16Array0 = new NativeUint16Array();
      NativeUint8Array[] nativeUint8ArrayArray0 = new NativeUint8Array[3];
      NativeUint8Array[] nativeUint8ArrayArray1 = nativeUint16Array0.toArray(nativeUint8ArrayArray0);
      assertEquals(3, nativeUint8ArrayArray1.length);
  }

  @Test(timeout = 4000)
  public void test02()  throws Throwable  {
      NativeUint16Array nativeUint16Array0 = new NativeUint16Array(13);
      NativeUint8Array[] nativeUint8ArrayArray0 = new NativeUint8Array[3];
      // Undeclared exception!
      try { 
        nativeUint16Array0.toArray(nativeUint8ArrayArray0);
        fail("Expecting exception: ArrayStoreException");
      
      } catch(ArrayStoreException e) {
         //
         // java.lang.Integer
         //
         verifyException("org.mozilla.javascript.typedarrays.NativeTypedArrayView", e);
      }
  }

  @Test(timeout = 4000)
  public void test03()  throws Throwable  {
      NativeArrayBuffer nativeArrayBuffer0 = new NativeArrayBuffer();
      NativeFloat64Array nativeFloat64Array0 = new NativeFloat64Array(nativeArrayBuffer0, 700, 2097152);
      // Undeclared exception!
      try { 
        nativeFloat64Array0.subList(0, (-465));
        fail("Expecting exception: UnsupportedOperationException");
      
      } catch(UnsupportedOperationException e) {
         //
         // no message in exception (getMessage() returned null)
         //
         verifyException("org.mozilla.javascript.typedarrays.NativeTypedArrayView", e);
      }
  }

  @Test(timeout = 4000)
  public void test04()  throws Throwable  {
      NativeFloat64Array nativeFloat64Array0 = new NativeFloat64Array();
      int int0 = nativeFloat64Array0.size();
      assertEquals(0, int0);
  }

  @Test(timeout = 4000)
  public void test05()  throws Throwable  {
      NativeUint8ClampedArray nativeUint8ClampedArray0 = new NativeUint8ClampedArray();
      Byte byte0 = new Byte((byte)124);
      nativeUint8ClampedArray0.setArrayElement(0, byte0);
      assertTrue(nativeUint8ClampedArray0.isExtensible());
  }

  @Test(timeout = 4000)
  public void test06()  throws Throwable  {
      NativeInt8Array nativeInt8Array0 = new NativeInt8Array();
      NativeUint32Array nativeUint32Array0 = new NativeUint32Array();
      // Undeclared exception!
      try { 
        nativeUint32Array0.retainAll(nativeInt8Array0);
        fail("Expecting exception: UnsupportedOperationException");
      
      } catch(UnsupportedOperationException e) {
         //
         // no message in exception (getMessage() returned null)
         //
         verifyException("org.mozilla.javascript.typedarrays.NativeTypedArrayView", e);
      }
  }

  @Test(timeout = 4000)
  public void test07()  throws Throwable  {
      NativeInt16Array nativeInt16Array0 = new NativeInt16Array();
      NativeInt8Array nativeInt8Array0 = new NativeInt8Array();
      // Undeclared exception!
      try { 
        nativeInt8Array0.removeAll(nativeInt16Array0);
        fail("Expecting exception: UnsupportedOperationException");
      
      } catch(UnsupportedOperationException e) {
         //
         // no message in exception (getMessage() returned null)
         //
         verifyException("org.mozilla.javascript.typedarrays.NativeTypedArrayView", e);
      }
  }

  @Test(timeout = 4000)
  public void test08()  throws Throwable  {
      NativeInt16Array nativeInt16Array0 = new NativeInt16Array(0);
      NativeInt8Array nativeInt8Array0 = new NativeInt8Array();
      // Undeclared exception!
      try { 
        nativeInt16Array0.remove((Object) nativeInt8Array0);
        fail("Expecting exception: UnsupportedOperationException");
      
      } catch(UnsupportedOperationException e) {
         //
         // no message in exception (getMessage() returned null)
         //
         verifyException("org.mozilla.javascript.typedarrays.NativeTypedArrayView", e);
      }
  }

  @Test(timeout = 4000)
  public void test09()  throws Throwable  {
      NativeUint8ClampedArray nativeUint8ClampedArray0 = new NativeUint8ClampedArray();
      // Undeclared exception!
      try { 
        nativeUint8ClampedArray0.remove(0);
        fail("Expecting exception: UnsupportedOperationException");
      
      } catch(UnsupportedOperationException e) {
         //
         // no message in exception (getMessage() returned null)
         //
         verifyException("org.mozilla.javascript.typedarrays.NativeTypedArrayView", e);
      }
  }

  @Test(timeout = 4000)
  public void test10()  throws Throwable  {
      NativeUint32Array nativeUint32Array0 = new NativeUint32Array(0);
      NativeObject nativeObject0 = new NativeObject();
      nativeObject0.put(4, (Scriptable) nativeUint32Array0, (Object) nativeUint32Array0);
      assertEquals(0, nativeUint32Array0.getArrayLength());
      assertTrue(nativeUint32Array0.isEmpty());
  }

  @Test(timeout = 4000)
  public void test11()  throws Throwable  {
      NativeUint16Array nativeUint16Array0 = new NativeUint16Array();
      // Undeclared exception!
      try { 
        nativeUint16Array0.listIterator(0);
        fail("Expecting exception: IndexOutOfBoundsException");
      
      } catch(IndexOutOfBoundsException e) {
         //
         // no message in exception (getMessage() returned null)
         //
         verifyException("org.mozilla.javascript.typedarrays.NativeTypedArrayView", e);
      }
  }

  @Test(timeout = 4000)
  public void test12()  throws Throwable  {
      NativeInt8Array nativeInt8Array0 = new NativeInt8Array();
      Comparator<Byte> comparator0 = (Comparator<Byte>) mock(Comparator.class, new ViolatedAssumptionAnswer());
      nativeInt8Array0.sort(comparator0);
      assertTrue(nativeInt8Array0.isExtensible());
  }

  @Test(timeout = 4000)
  public void test13()  throws Throwable  {
      NativeArrayBuffer nativeArrayBuffer0 = new NativeArrayBuffer(1035);
      NativeUint32Array nativeUint32Array0 = new NativeUint32Array(nativeArrayBuffer0, 6, 1035);
      boolean boolean0 = nativeUint32Array0.isEmpty();
      assertFalse(boolean0);
      assertEquals(1035, nativeUint32Array0.getArrayLength());
  }

  @Test(timeout = 4000)
  public void test14()  throws Throwable  {
      NativeUint8Array nativeUint8Array0 = new NativeUint8Array();
      // Undeclared exception!
      try { 
        nativeUint8Array0.initPrototypeId(8);
        fail("Expecting exception: IllegalArgumentException");
      
      } catch(IllegalArgumentException e) {
         //
         // 8
         //
         verifyException("org.mozilla.javascript.typedarrays.NativeTypedArrayView", e);
      }
  }

  @Test(timeout = 4000)
  public void test15()  throws Throwable  {
      NativeUint8Array nativeUint8Array0 = new NativeUint8Array();
      Object object0 = nativeUint8Array0.getInstanceIdValue(2);
      assertEquals(0, object0);
  }

  @Test(timeout = 4000)
  public void test16()  throws Throwable  {
      NativeInt8Array nativeInt8Array0 = new NativeInt8Array();
      Object object0 = nativeInt8Array0.getInstanceIdValue(11);
      assertEquals(1, object0);
  }

  @Test(timeout = 4000)
  public void test17()  throws Throwable  {
      NativeInt8Array nativeInt8Array0 = new NativeInt8Array();
      Object object0 = nativeInt8Array0.getInstanceIdValue(10);
      assertEquals(0, object0);
  }

  @Test(timeout = 4000)
  public void test18()  throws Throwable  {
      NativeUint16Array nativeUint16Array0 = new NativeUint16Array(13);
      Object[] objectArray0 = ScriptableObject.getPropertyIds(nativeUint16Array0);
      assertEquals(13, objectArray0.length);
  }

  @Test(timeout = 4000)
  public void test19()  throws Throwable  {
      NativeInt16Array nativeInt16Array0 = new NativeInt16Array();
      int int0 = nativeInt16Array0.getArrayLength();
      assertEquals(0, int0);
  }

  @Test(timeout = 4000)
  public void test20()  throws Throwable  {
      NativeInt32Array nativeInt32Array0 = new NativeInt32Array();
      Object object0 = nativeInt32Array0.getArrayElement((-1));
      assertNotNull(object0);
  }

  @Test(timeout = 4000)
  public void test21()  throws Throwable  {
      NativeUint8Array nativeUint8Array0 = new NativeUint8Array(393);
      Object object0 = nativeUint8Array0.get((Object) nativeUint8Array0.PERMANENT);
      assertNotNull(object0);
      assertEquals(393, nativeUint8Array0.getArrayLength());
  }

  @Test(timeout = 4000)
  public void test22()  throws Throwable  {
      SymbolKey symbolKey0 = SymbolKey.SPECIES;
      NativeUint32Array nativeUint32Array0 = new NativeUint32Array();
      int int0 = nativeUint32Array0.findPrototypeId(symbolKey0);
      assertEquals(0, int0);
  }

  @Test(timeout = 4000)
  public void test23()  throws Throwable  {
      SymbolKey symbolKey0 = SymbolKey.ITERATOR;
      NativeArrayBuffer nativeArrayBuffer0 = new NativeArrayBuffer(5);
      NativeUint32Array nativeUint32Array0 = new NativeUint32Array(nativeArrayBuffer0, 140, 3);
      int int0 = nativeUint32Array0.findPrototypeId(symbolKey0);
      assertEquals(3, nativeUint32Array0.getArrayLength());
      assertEquals(5, int0);
  }

  @Test(timeout = 4000)
  public void test24()  throws Throwable  {
      NativeInt8Array nativeInt8Array0 = new NativeInt8Array();
      int int0 = nativeInt8Array0.findPrototypeId("T[@");
      assertEquals(0, int0);
  }

  @Test(timeout = 4000)
  public void test25()  throws Throwable  {
      NativeInt8Array nativeInt8Array0 = new NativeInt8Array();
      // Undeclared exception!
      try { 
        nativeInt8Array0.getAllIds();
        fail("Expecting exception: IllegalArgumentException");
      
      } catch(IllegalArgumentException e) {
         //
         // 9
         //
         verifyException("org.mozilla.javascript.IdScriptableObject", e);
      }
  }

  @Test(timeout = 4000)
  public void test26()  throws Throwable  {
      NativeUint8Array nativeUint8Array0 = new NativeUint8Array();
      Context context0 = Context.enter();
      NativeUint32Array.init(context0, nativeUint8Array0, true);
      assertEquals(0, context0.getInstructionObserverThreshold());
  }

  @Test(timeout = 4000)
  public void test27()  throws Throwable  {
      NativeInt32Array nativeInt32Array0 = new NativeInt32Array(2);
      NativeInt16Array nativeInt16Array0 = new NativeInt16Array();
      IdFunctionObject idFunctionObject0 = new IdFunctionObject(nativeInt32Array0, nativeInt16Array0, 1, "\"iOe#%+LI w", 10, nativeInt16Array0);
      Context context0 = Context.enter();
      // Undeclared exception!
      try { 
        nativeInt32Array0.execIdCall(idFunctionObject0, context0, nativeInt16Array0, idFunctionObject0, context0.emptyArgs);
        fail("Expecting exception: IllegalArgumentException");
      
      } catch(IllegalArgumentException e) {
         //
         // BAD FUNCTION ID=1 MASTER=org.mozilla.javascript.typedarrays.NativeInt32Array@1a
         //
         verifyException("org.mozilla.javascript.IdFunctionObject", e);
      }
  }

  @Test(timeout = 4000)
  public void test28()  throws Throwable  {
      NativeFloat32Array nativeFloat32Array0 = new NativeFloat32Array();
      NativeUint8Array nativeUint8Array0 = new NativeUint8Array(13);
      int int0 = nativeUint8Array0.lastIndexOf(nativeFloat32Array0);
      assertEquals(13, nativeUint8Array0.getArrayLength());
      assertEquals((-1), int0);
  }

  @Test(timeout = 4000)
  public void test29()  throws Throwable  {
      NativeFloat64Array nativeFloat64Array0 = new NativeFloat64Array(1);
      NativeInt32Array nativeInt32Array0 = new NativeInt32Array(1);
      boolean boolean0 = nativeFloat64Array0.equals(nativeInt32Array0);
      assertFalse(boolean0);
      assertEquals(1, nativeInt32Array0.size());
  }

  @Test(timeout = 4000)
  public void test30()  throws Throwable  {
      NativeFloat64Array nativeFloat64Array0 = new NativeFloat64Array((NativeArrayBuffer) null, 0, 178);
      NativeInt32Array nativeInt32Array0 = new NativeInt32Array();
      boolean boolean0 = nativeFloat64Array0.equals(nativeInt32Array0);
      assertFalse(boolean0);
      assertEquals(178, nativeFloat64Array0.getArrayLength());
  }

  @Test(timeout = 4000)
  public void test31()  throws Throwable  {
      NativeFloat32Array nativeFloat32Array0 = new NativeFloat32Array();
      NativeUint16Array nativeUint16Array0 = new NativeUint16Array();
      boolean boolean0 = nativeUint16Array0.equals(nativeFloat32Array0);
      assertTrue(boolean0);
  }

  @Test(timeout = 4000)
  public void test32()  throws Throwable  {
      NativeUint32Array nativeUint32Array0 = new NativeUint32Array(155);
      boolean boolean0 = ScriptableObject.deleteProperty((Scriptable) nativeUint32Array0, 2);
      assertEquals(155, nativeUint32Array0.getArrayLength());
      assertFalse(boolean0);
  }

  @Test(timeout = 4000)
  public void test33()  throws Throwable  {
      NativeInt8Array nativeInt8Array0 = new NativeInt8Array();
      assertEquals(0, nativeInt8Array0.getArrayLength());
      
      NativeArray nativeArray0 = new NativeArray(8);
      boolean boolean0 = nativeInt8Array0.containsAll(nativeArray0);
      assertFalse(boolean0);
  }

  @Test(timeout = 4000)
  public void test34()  throws Throwable  {
      NativeUint8Array nativeUint8Array0 = new NativeUint8Array(13);
      boolean boolean0 = nativeUint8Array0.containsAll(nativeUint8Array0);
      assertEquals(13, nativeUint8Array0.size());
      assertTrue(boolean0);
  }

  @Test(timeout = 4000)
  public void test35()  throws Throwable  {
      NativeUint8ClampedArray nativeUint8ClampedArray0 = new NativeUint8ClampedArray();
      // Undeclared exception!
      try { 
        nativeUint8ClampedArray0.clear();
        fail("Expecting exception: UnsupportedOperationException");
      
      } catch(UnsupportedOperationException e) {
         //
         // no message in exception (getMessage() returned null)
         //
         verifyException("org.mozilla.javascript.typedarrays.NativeTypedArrayView", e);
      }
  }

  @Test(timeout = 4000)
  public void test36()  throws Throwable  {
      NativeUint8ClampedArray nativeUint8ClampedArray0 = new NativeUint8ClampedArray();
      // Undeclared exception!
      try { 
        nativeUint8ClampedArray0.addAll((Collection<? extends Integer>) nativeUint8ClampedArray0);
        fail("Expecting exception: UnsupportedOperationException");
      
      } catch(UnsupportedOperationException e) {
         //
         // no message in exception (getMessage() returned null)
         //
         verifyException("org.mozilla.javascript.typedarrays.NativeTypedArrayView", e);
      }
  }

  @Test(timeout = 4000)
  public void test37()  throws Throwable  {
      NativeInt8Array nativeInt8Array0 = new NativeInt8Array(11);
      Object[] objectArray0 = new Object[2];
      NativeArray nativeArray0 = new NativeArray(objectArray0);
      // Undeclared exception!
      try { 
        nativeInt8Array0.addAll(1300, (Collection<? extends Byte>) nativeArray0);
        fail("Expecting exception: UnsupportedOperationException");
      
      } catch(UnsupportedOperationException e) {
         //
         // no message in exception (getMessage() returned null)
         //
         verifyException("org.mozilla.javascript.typedarrays.NativeTypedArrayView", e);
      }
  }

  @Test(timeout = 4000)
  public void test38()  throws Throwable  {
      NativeInt16Array nativeInt16Array0 = new NativeInt16Array(3);
      Short short0 = new Short((short)224);
      // Undeclared exception!
      try { 
        nativeInt16Array0.add(short0);
        fail("Expecting exception: UnsupportedOperationException");
      
      } catch(UnsupportedOperationException e) {
         //
         // no message in exception (getMessage() returned null)
         //
         verifyException("org.mozilla.javascript.typedarrays.NativeTypedArrayView", e);
      }
  }

  @Test(timeout = 4000)
  public void test39()  throws Throwable  {
      NativeFloat64Array nativeFloat64Array0 = new NativeFloat64Array(1);
      ListIterator<Double> listIterator0 = nativeFloat64Array0.listIterator(0);
      assertTrue(listIterator0.hasNext());
      assertEquals(1, nativeFloat64Array0.getArrayLength());
  }

  @Test(timeout = 4000)
  public void test40()  throws Throwable  {
      NativeFloat32Array nativeFloat32Array0 = new NativeFloat32Array();
      Float float0 = new Float(1.0F);
      // Undeclared exception!
      try { 
        nativeFloat32Array0.add(45, float0);
        fail("Expecting exception: UnsupportedOperationException");
      
      } catch(UnsupportedOperationException e) {
         //
         // no message in exception (getMessage() returned null)
         //
         verifyException("org.mozilla.javascript.typedarrays.NativeTypedArrayView", e);
      }
  }
}
