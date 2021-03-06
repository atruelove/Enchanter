/*
 * This file was automatically generated by EvoSuite
 * Wed Aug 01 02:50:29 GMT 2018
 */

package org.mozilla.javascript;

import org.junit.Test;
import static org.junit.Assert.*;
import static org.evosuite.runtime.EvoAssertions.*;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.lang.reflect.Array;
import org.evosuite.runtime.EvoRunner;
import org.evosuite.runtime.EvoRunnerParameters;
import org.evosuite.runtime.mock.java.io.MockPrintStream;
import org.junit.runner.RunWith;
import org.mozilla.javascript.Arguments;
import org.mozilla.javascript.ArrowFunction;
import org.mozilla.javascript.BaseFunction;
import org.mozilla.javascript.Context;
import org.mozilla.javascript.ContextFactory;
import org.mozilla.javascript.Function;
import org.mozilla.javascript.IdFunctionObject;
import org.mozilla.javascript.JavaAdapter;
import org.mozilla.javascript.NativeArray;
import org.mozilla.javascript.NativeCall;
import org.mozilla.javascript.NativeContinuation;
import org.mozilla.javascript.NativeIterator;
import org.mozilla.javascript.NativeJSON;
import org.mozilla.javascript.NativeJavaClass;
import org.mozilla.javascript.NativeJavaObject;
import org.mozilla.javascript.NativeJavaPackage;
import org.mozilla.javascript.NativeJavaTopPackage;
import org.mozilla.javascript.ObjToIntMap;
import org.mozilla.javascript.Script;
import org.mozilla.javascript.Scriptable;
import org.mozilla.javascript.ScriptableObject;
import org.mozilla.javascript.Synchronizer;
import org.mozilla.javascript.TopLevel;
import org.mozilla.javascript.typedarrays.NativeArrayBuffer;
import org.mozilla.javascript.typedarrays.NativeInt8Array;
import org.mozilla.javascript.typedarrays.NativeUint8ClampedArray;

@RunWith(EvoRunner.class) @EvoRunnerParameters(mockJVMNonDeterminism = true, useVFS = true, useVNET = true, resetStaticState = true, separateClassLoader = true, useJEE = true) 
public class JavaAdapter_ESTest extends JavaAdapter_ESTest_scaffolding {

  @Test(timeout = 4000)
  public void test00()  throws Throwable  {
      Class<TopLevel> class0 = TopLevel.class;
      Class<Integer>[] classArray0 = (Class<Integer>[]) Array.newInstance(Class.class, 4);
      Class<Integer> class1 = Integer.class;
      JavaAdapter.JavaAdapterSignature javaAdapter_JavaAdapterSignature0 = new JavaAdapter.JavaAdapterSignature(class0, classArray0, (ObjToIntMap) null);
      // Undeclared exception!
      try { 
        JavaAdapter.convertResult(javaAdapter_JavaAdapterSignature0, class1);
        fail("Expecting exception: NullPointerException");
      
      } catch(NullPointerException e) {
         //
         // no message in exception (getMessage() returned null)
         //
         verifyException("org.mozilla.javascript.JavaAdapter$JavaAdapterSignature", e);
      }
  }

  @Test(timeout = 4000)
  public void test01()  throws Throwable  {
      Class<NativeIterator> class0 = NativeIterator.class;
      Class<NativeJavaObject>[] classArray0 = (Class<NativeJavaObject>[]) Array.newInstance(Class.class, 8);
      Context context0 = Context.enter();
      JavaAdapter.JavaAdapterSignature javaAdapter_JavaAdapterSignature0 = new JavaAdapter.JavaAdapterSignature(class0, classArray0, (ObjToIntMap) null);
      boolean boolean0 = javaAdapter_JavaAdapterSignature0.equals(context0);
      assertFalse(boolean0);
  }

  @Test(timeout = 4000)
  public void test02()  throws Throwable  {
      JavaAdapter javaAdapter0 = new JavaAdapter();
      ByteArrayOutputStream byteArrayOutputStream0 = new ByteArrayOutputStream();
      MockPrintStream mockPrintStream0 = new MockPrintStream(byteArrayOutputStream0);
      ObjectOutputStream objectOutputStream0 = new ObjectOutputStream(mockPrintStream0);
      try { 
        JavaAdapter.writeAdapterObject(javaAdapter0, objectOutputStream0);
        fail("Expecting exception: IOException");
      
      } catch(IOException e) {
         //
         // no message in exception (getMessage() returned null)
         //
         verifyException("org.mozilla.javascript.JavaAdapter", e);
      }
  }

  @Test(timeout = 4000)
  public void test03()  throws Throwable  {
      // Undeclared exception!
      try { 
        JavaAdapter.runScript((Script) null);
        fail("Expecting exception: NullPointerException");
      
      } catch(NullPointerException e) {
         //
         // no message in exception (getMessage() returned null)
         //
         verifyException("org.mozilla.javascript.JavaAdapter$2", e);
      }
  }

  @Test(timeout = 4000)
  public void test04()  throws Throwable  {
      NativeInt8Array nativeInt8Array0 = new NativeInt8Array();
      // Undeclared exception!
      try { 
        JavaAdapter.readAdapterObject(nativeInt8Array0, (ObjectInputStream) null);
        fail("Expecting exception: NullPointerException");
      
      } catch(NullPointerException e) {
         //
         // no message in exception (getMessage() returned null)
         //
         verifyException("org.mozilla.javascript.JavaAdapter", e);
      }
  }

  @Test(timeout = 4000)
  public void test05()  throws Throwable  {
      ContextFactory contextFactory0 = new ContextFactory();
      NativeArrayBuffer nativeArrayBuffer0 = NativeArrayBuffer.EMPTY_BUFFER;
      Context context0 = contextFactory0.makeContext();
      // Undeclared exception!
      try { 
        JavaAdapter.js_createAdapter(context0, nativeArrayBuffer0, context0.emptyArgs);
        fail("Expecting exception: RuntimeException");
      
      } catch(RuntimeException e) {
         //
         // TypeError: JavaAdapter requires at least one argument.
         //
         verifyException("org.mozilla.javascript.ScriptRuntime", e);
      }
  }

  @Test(timeout = 4000)
  public void test06()  throws Throwable  {
      ContextFactory contextFactory0 = new ContextFactory();
      Context context0 = contextFactory0.enterContext();
      NativeArrayBuffer nativeArrayBuffer0 = new NativeArrayBuffer();
      NativeUint8ClampedArray nativeUint8ClampedArray0 = new NativeUint8ClampedArray(nativeArrayBuffer0, 6, 1);
      JavaAdapter.init(context0, nativeUint8ClampedArray0, true);
      assertEquals(150, Context.VERSION_1_5);
  }

  @Test(timeout = 4000)
  public void test07()  throws Throwable  {
      ClassLoader classLoader0 = ClassLoader.getSystemClassLoader();
      NativeJavaTopPackage nativeJavaTopPackage0 = new NativeJavaTopPackage(classLoader0);
      NativeCall nativeCall0 = new NativeCall();
      NativeJavaPackage nativeJavaPackage0 = nativeJavaTopPackage0.forcePackage("", nativeCall0);
      // Undeclared exception!
      try { 
        JavaAdapter.getFunction(nativeJavaPackage0, "");
       //  fail("Expecting exception: RuntimeException");
       // Unstable assertion
      } catch(RuntimeException e) {
         //
         // TypeError: java.lang.String@0000000015 is not a function, it is object.
         //
         verifyException("org.mozilla.javascript.ScriptRuntime", e);
      }
  }

  @Test(timeout = 4000)
  public void test08()  throws Throwable  {
      NativeArrayBuffer nativeArrayBuffer0 = new NativeArrayBuffer(228);
      Function function0 = JavaAdapter.getFunction(nativeArrayBuffer0, "&Zr");
      assertNull(function0);
  }

  @Test(timeout = 4000)
  public void test09()  throws Throwable  {
      Class<NativeJavaClass>[] classArray0 = (Class<NativeJavaClass>[]) Array.newInstance(Class.class, 0);
      int[] intArray0 = JavaAdapter.getArgsToConvert(classArray0);
      assertNull(intArray0);
  }

  @Test(timeout = 4000)
  public void test10()  throws Throwable  {
      Class<ArrowFunction>[] classArray0 = (Class<ArrowFunction>[]) Array.newInstance(Class.class, 1);
      Class<ArrowFunction> class0 = ArrowFunction.class;
      classArray0[0] = class0;
      int[] intArray0 = JavaAdapter.getArgsToConvert(classArray0);
      assertArrayEquals(new int[] {0}, intArray0);
      assertNotNull(intArray0);
  }

  @Test(timeout = 4000)
  public void test11()  throws Throwable  {
      Class<NativeContinuation> class0 = NativeContinuation.class;
      try { 
        JavaAdapter.getAdapterSelf(class0, class0);
        fail("Expecting exception: NoSuchFieldException");
      
      } catch(NoSuchFieldException e) {
      }
  }

  @Test(timeout = 4000)
  public void test12()  throws Throwable  {
      ObjToIntMap objToIntMap0 = new ObjToIntMap(94);
      Class<NativeContinuation> class0 = NativeContinuation.class;
      Class<String>[] classArray0 = (Class<String>[]) Array.newInstance(Class.class, 4);
      Class<String> class1 = String.class;
      classArray0[0] = class1;
      // Undeclared exception!
      JavaAdapter.createAdapterCode(objToIntMap0, "t^n'ib", class0, classArray0, "b");
  }

  @Test(timeout = 4000)
  public void test13()  throws Throwable  {
      Class<NativeArray> class0 = NativeArray.class;
      Class<Arguments>[] classArray0 = (Class<Arguments>[]) Array.newInstance(Class.class, 8);
      // Undeclared exception!
      try { 
        JavaAdapter.createAdapterCode((ObjToIntMap) null, "LZ", class0, classArray0, "qNc&Zz!vy410r");
        fail("Expecting exception: NullPointerException");
      
      } catch(NullPointerException e) {
         //
         // no message in exception (getMessage() returned null)
         //
         verifyException("org.evosuite.runtime.util.ReflectionUtils", e);
      }
  }

  @Test(timeout = 4000)
  public void test14()  throws Throwable  {
      Class<NativeJavaObject>[] classArray0 = (Class<NativeJavaObject>[]) Array.newInstance(Class.class, 8);
      Class<NativeJavaObject> class0 = NativeJavaObject.class;
      classArray0[1] = class0;
      // Undeclared exception!
      try { 
        JavaAdapter.createAdapterCode((ObjToIntMap) null, "error reporter", classArray0[1], classArray0, "error reporter");
        fail("Expecting exception: NullPointerException");
      
      } catch(NullPointerException e) {
         //
         // no message in exception (getMessage() returned null)
         //
         verifyException("org.evosuite.runtime.util.ReflectionUtils", e);
      }
  }

  @Test(timeout = 4000)
  public void test15()  throws Throwable  {
      NativeCall nativeCall0 = new NativeCall();
      ContextFactory contextFactory0 = new ContextFactory();
      Context context0 = contextFactory0.enterContext();
      Scriptable scriptable0 = context0.initStandardObjects((ScriptableObject) nativeCall0);
      Scriptable scriptable1 = JavaAdapter.createAdapterWrapper(scriptable0, context0);
      assertEquals("JavaObject", scriptable1.getClassName());
  }

  @Test(timeout = 4000)
  public void test16()  throws Throwable  {
      ObjToIntMap objToIntMap0 = new ObjToIntMap();
      objToIntMap0.put((Object) null, 4);
      Class<Synchronizer> class0 = Synchronizer.class;
      Class<Integer>[] classArray0 = (Class<Integer>[]) Array.newInstance(Class.class, 3);
      Class<Integer> class1 = Integer.class;
      classArray0[0] = class1;
      classArray0[1] = class1;
      classArray0[2] = classArray0[0];
      // Undeclared exception!
      try { 
        JavaAdapter.createAdapterCode(objToIntMap0, "", class0, classArray0, "");
        fail("Expecting exception: NullPointerException");
      
      } catch(NullPointerException e) {
         //
         // no message in exception (getMessage() returned null)
         //
      }
  }

  @Test(timeout = 4000)
  public void test17()  throws Throwable  {
      ObjToIntMap objToIntMap0 = new ObjToIntMap();
      Class<Synchronizer> class0 = Synchronizer.class;
      Class<Integer>[] classArray0 = (Class<Integer>[]) Array.newInstance(Class.class, 3);
      Class<Integer> class1 = Integer.class;
      classArray0[0] = class1;
      classArray0[1] = classArray0[0];
      classArray0[2] = classArray0[0];
      byte[] byteArray0 = JavaAdapter.createAdapterCode(objToIntMap0, "", class0, classArray0, "");
      assertEquals(11396, byteArray0.length);
  }

  @Test(timeout = 4000)
  public void test18()  throws Throwable  {
      ObjToIntMap objToIntMap0 = new ObjToIntMap(0);
      Class<NativeJSON> class0 = NativeJSON.class;
      Class<NativeArray>[] classArray0 = (Class<NativeArray>[]) Array.newInstance(Class.class, 9);
      Class<NativeArray> class1 = NativeArray.class;
      classArray0[0] = class1;
      // Undeclared exception!
      try { 
        JavaAdapter.createAdapterCode(objToIntMap0, "WR70U@I`:!dzip:", class0, classArray0, "");
        fail("Expecting exception: NullPointerException");
      
      } catch(NullPointerException e) {
         //
         // no message in exception (getMessage() returned null)
         //
         verifyException("org.evosuite.runtime.util.ReflectionUtils", e);
      }
  }

  @Test(timeout = 4000)
  public void test19()  throws Throwable  {
      NativeInt8Array nativeInt8Array0 = new NativeInt8Array();
      Object object0 = ScriptableObject.getProperty((Scriptable) nativeInt8Array0, 8);
      Class<BaseFunction> class0 = BaseFunction.class;
      Object object1 = JavaAdapter.convertResult(object0, class0);
      assertNull(object1);
  }

  @Test(timeout = 4000)
  public void test20()  throws Throwable  {
      ContextFactory contextFactory0 = ContextFactory.getGlobal();
      Context context0 = contextFactory0.makeContext();
      ClassLoader classLoader0 = context0.getApplicationClassLoader();
      NativeJavaTopPackage nativeJavaTopPackage0 = new NativeJavaTopPackage(classLoader0);
      Object object0 = JavaAdapter.callMethod((ContextFactory) null, (Scriptable) null, nativeJavaTopPackage0, context0.emptyArgs, 0);
      assertNull(object0);
  }

  @Test(timeout = 4000)
  public void test21()  throws Throwable  {
      ContextFactory contextFactory0 = new ContextFactory();
      Context context0 = Context.getCurrentContext();
      Object object0 = JavaAdapter.callMethod(contextFactory0, (Scriptable) null, (Function) null, context0.emptyArgs, 3);
      assertNull(object0);
  }

  @Test(timeout = 4000)
  public void test22()  throws Throwable  {
      NativeCall nativeCall0 = new NativeCall();
      Class<InputStream>[] classArray0 = (Class<InputStream>[]) Array.newInstance(Class.class, 5);
      ContextFactory contextFactory0 = new ContextFactory();
      NativeContinuation nativeContinuation0 = new NativeContinuation();
      // Undeclared exception!
      try { 
        JavaAdapter.callMethod(contextFactory0, nativeCall0, nativeContinuation0, classArray0, 2L);
        fail("Expecting exception: IllegalArgumentException");
      
      } catch(IllegalArgumentException e) {
         //
         // no message in exception (getMessage() returned null)
         //
         verifyException("org.mozilla.javascript.ScriptRuntime", e);
      }
  }

  @Test(timeout = 4000)
  public void test23()  throws Throwable  {
      JavaAdapter javaAdapter0 = new JavaAdapter();
      IdFunctionObject idFunctionObject0 = new IdFunctionObject(javaAdapter0, javaAdapter0, (-4055), 108);
      ContextFactory contextFactory0 = ContextFactory.getGlobal();
      Context context0 = new Context(contextFactory0);
      // Undeclared exception!
      try { 
        javaAdapter0.execIdCall(idFunctionObject0, context0, idFunctionObject0, idFunctionObject0, context0.emptyArgs);
        fail("Expecting exception: IllegalArgumentException");
      
      } catch(IllegalArgumentException e) {
         //
         // BAD FUNCTION ID=-4055 MASTER=org.mozilla.javascript.JavaAdapter@1
         //
         verifyException("org.mozilla.javascript.IdFunctionObject", e);
      }
  }
}
