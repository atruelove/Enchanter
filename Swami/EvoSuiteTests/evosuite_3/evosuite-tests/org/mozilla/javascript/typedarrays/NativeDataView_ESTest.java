/*
 * This file was automatically generated by EvoSuite
 * Wed Aug 01 21:44:29 GMT 2018
 */

package org.mozilla.javascript.typedarrays;

import org.junit.Test;
import static org.junit.Assert.*;
import static org.evosuite.runtime.EvoAssertions.*;
import org.evosuite.runtime.EvoRunner;
import org.evosuite.runtime.EvoRunnerParameters;
import org.junit.runner.RunWith;
import org.mozilla.javascript.Context;
import org.mozilla.javascript.ContextFactory;
import org.mozilla.javascript.IdFunctionObject;
import org.mozilla.javascript.IdFunctionObjectES6;
import org.mozilla.javascript.NativeArray;
import org.mozilla.javascript.NativeObject;
import org.mozilla.javascript.Scriptable;
import org.mozilla.javascript.ScriptableObject;
import org.mozilla.javascript.typedarrays.NativeArrayBuffer;
import org.mozilla.javascript.typedarrays.NativeDataView;

@RunWith(EvoRunner.class) @EvoRunnerParameters(mockJVMNonDeterminism = true, useVFS = true, useVNET = true, resetStaticState = true, separateClassLoader = true, useJEE = true) 
public class NativeDataView_ESTest extends NativeDataView_ESTest_scaffolding {

  @Test(timeout = 4000)
  public void test00()  throws Throwable  {
      NativeDataView nativeDataView0 = new NativeDataView();
      IdFunctionObjectES6 idFunctionObjectES6_0 = new IdFunctionObjectES6(nativeDataView0, "DataView", 0, "DataView", 0, nativeDataView0);
      Context context0 = Context.enter();
      // Undeclared exception!
      try { 
        nativeDataView0.execIdCall(idFunctionObjectES6_0, context0, idFunctionObjectES6_0, idFunctionObjectES6_0, context0.emptyArgs);
        fail("Expecting exception: IllegalArgumentException");
      
      } catch(IllegalArgumentException e) {
         //
         // 0
         //
         verifyException("org.mozilla.javascript.typedarrays.NativeDataView", e);
      }
  }

  @Test(timeout = 4000)
  public void test01()  throws Throwable  {
      NativeDataView nativeDataView0 = new NativeDataView();
      Context context0 = Context.enter();
      Scriptable scriptable0 = context0.newObject((Scriptable) nativeDataView0);
      IdFunctionObject idFunctionObject0 = new IdFunctionObject(nativeDataView0, "DataView", 15, 9);
      // Undeclared exception!
      try { 
        nativeDataView0.execIdCall(idFunctionObject0, context0, scriptable0, scriptable0, context0.emptyArgs);
        fail("Expecting exception: RuntimeException");
      
      } catch(RuntimeException e) {
         //
         // TypeError: Method \"\" called on incompatible object.
         //
         verifyException("org.mozilla.javascript.ScriptRuntime", e);
      }
  }

  @Test(timeout = 4000)
  public void test02()  throws Throwable  {
      NativeDataView nativeDataView0 = new NativeDataView();
      Context context0 = Context.enter();
      Scriptable scriptable0 = context0.newObject((Scriptable) nativeDataView0);
      IdFunctionObject idFunctionObject0 = new IdFunctionObject(nativeDataView0, "DataView", 12, 9);
      // Undeclared exception!
      try { 
        nativeDataView0.execIdCall(idFunctionObject0, context0, scriptable0, scriptable0, context0.emptyArgs);
        fail("Expecting exception: RuntimeException");
      
      } catch(RuntimeException e) {
         //
         // TypeError: Method \"\" called on incompatible object.
         //
         verifyException("org.mozilla.javascript.ScriptRuntime", e);
      }
  }

  @Test(timeout = 4000)
  public void test03()  throws Throwable  {
      NativeDataView nativeDataView0 = new NativeDataView();
      Context context0 = Context.getCurrentContext();
      IdFunctionObject idFunctionObject0 = new IdFunctionObject(nativeDataView0, "DataView", 10, 9);
      NativeArray nativeArray0 = new NativeArray(context0.emptyArgs);
      // Undeclared exception!
      try { 
        nativeDataView0.execIdCall(idFunctionObject0, context0, nativeArray0, idFunctionObject0, context0.emptyArgs);
        fail("Expecting exception: RuntimeException");
      
      } catch(RuntimeException e) {
         //
         // TypeError: Method \"\" called on incompatible object.
         //
         verifyException("org.mozilla.javascript.ScriptRuntime", e);
      }
  }

  @Test(timeout = 4000)
  public void test04()  throws Throwable  {
      NativeDataView nativeDataView0 = new NativeDataView();
      Context context0 = Context.getCurrentContext();
      IdFunctionObject idFunctionObject0 = new IdFunctionObject(nativeDataView0, "DataView", 9, 9);
      // Undeclared exception!
      try { 
        nativeDataView0.execIdCall(idFunctionObject0, context0, idFunctionObject0, idFunctionObject0, context0.emptyArgs);
        fail("Expecting exception: RuntimeException");
      
      } catch(RuntimeException e) {
         //
         // TypeError: Method \"\" called on incompatible object.
         //
         verifyException("org.mozilla.javascript.ScriptRuntime", e);
      }
  }

  @Test(timeout = 4000)
  public void test05()  throws Throwable  {
      NativeDataView nativeDataView0 = new NativeDataView();
      Context context0 = Context.getCurrentContext();
      IdFunctionObject idFunctionObject0 = new IdFunctionObject(nativeDataView0, "DataView", 7, 9);
      // Undeclared exception!
      try { 
        nativeDataView0.execIdCall(idFunctionObject0, context0, idFunctionObject0, idFunctionObject0, context0.emptyArgs);
        fail("Expecting exception: RuntimeException");
      
      } catch(RuntimeException e) {
         //
         // TypeError: Method \"\" called on incompatible object.
         //
         verifyException("org.mozilla.javascript.ScriptRuntime", e);
      }
  }

  @Test(timeout = 4000)
  public void test06()  throws Throwable  {
      NativeDataView nativeDataView0 = new NativeDataView();
      IdFunctionObjectES6 idFunctionObjectES6_0 = new IdFunctionObjectES6(nativeDataView0, "DataView", 4, "DataView", 0, nativeDataView0);
      Context context0 = Context.enter();
      // Undeclared exception!
      try { 
        nativeDataView0.execIdCall(idFunctionObjectES6_0, context0, idFunctionObjectES6_0, idFunctionObjectES6_0, context0.emptyArgs);
        fail("Expecting exception: RuntimeException");
      
      } catch(RuntimeException e) {
         //
         // TypeError: Method \"DataView\" called on incompatible object.
         //
         verifyException("org.mozilla.javascript.ScriptRuntime", e);
      }
  }

  @Test(timeout = 4000)
  public void test07()  throws Throwable  {
      NativeDataView nativeDataView0 = new NativeDataView();
      Context context0 = Context.enter();
      NativeObject nativeObject0 = new NativeObject();
      IdFunctionObject idFunctionObject0 = new IdFunctionObject(nativeDataView0, "DataView", 2, 9);
      // Undeclared exception!
      try { 
        nativeDataView0.execIdCall(idFunctionObject0, context0, nativeObject0, nativeObject0, context0.emptyArgs);
        fail("Expecting exception: RuntimeException");
      
      } catch(RuntimeException e) {
         //
         // TypeError: Method \"\" called on incompatible object.
         //
         verifyException("org.mozilla.javascript.ScriptRuntime", e);
      }
  }

  @Test(timeout = 4000)
  public void test08()  throws Throwable  {
      NativeArrayBuffer nativeArrayBuffer0 = NativeArrayBuffer.EMPTY_BUFFER;
      NativeDataView nativeDataView0 = new NativeDataView(nativeArrayBuffer0, 2, 4);
      Context context0 = Context.enter();
      ScriptableObject scriptableObject0 = context0.initStandardObjects();
      IdFunctionObject idFunctionObject0 = nativeDataView0.exportAsJSClass(468, scriptableObject0, false);
      Object[] objectArray0 = new Object[4];
      objectArray0[0] = (Object) nativeArrayBuffer0;
      NativeDataView nativeDataView1 = (NativeDataView)nativeDataView0.execIdCall(idFunctionObject0, context0, nativeDataView0, nativeArrayBuffer0, objectArray0);
      assertEquals("DataView", nativeDataView1.getClassName());
      assertEquals(0, nativeDataView1.getByteOffset());
      assertEquals(0, nativeDataView1.getByteLength());
  }

  @Test(timeout = 4000)
  public void test09()  throws Throwable  {
      NativeDataView nativeDataView0 = new NativeDataView();
      IdFunctionObject idFunctionObject0 = new IdFunctionObject(nativeDataView0, nativeDataView0, 1, 0);
      ContextFactory contextFactory0 = ContextFactory.getGlobal();
      Context context0 = contextFactory0.enterContext((Context) null);
      // Undeclared exception!
      try { 
        nativeDataView0.execIdCall(idFunctionObject0, context0, idFunctionObject0, idFunctionObject0, context0.emptyArgs);
        fail("Expecting exception: IllegalArgumentException");
      
      } catch(IllegalArgumentException e) {
         //
         // BAD FUNCTION ID=1 MASTER=org.mozilla.javascript.typedarrays.NativeDataView@3
         //
         verifyException("org.mozilla.javascript.IdFunctionObject", e);
      }
  }

  @Test(timeout = 4000)
  public void test10()  throws Throwable  {
      NativeArrayBuffer nativeArrayBuffer0 = NativeArrayBuffer.EMPTY_BUFFER;
      NativeDataView nativeDataView0 = new NativeDataView(nativeArrayBuffer0, 2, 4);
      Context context0 = Context.enter();
      ScriptableObject scriptableObject0 = context0.initStandardObjects();
      IdFunctionObject idFunctionObject0 = nativeDataView0.exportAsJSClass(468, scriptableObject0, false);
      // Undeclared exception!
      try { 
        nativeDataView0.execIdCall(idFunctionObject0, context0, nativeDataView0, nativeArrayBuffer0, context0.emptyArgs);
        fail("Expecting exception: RuntimeException");
      
      } catch(RuntimeException e) {
         //
         // TypeError: Missing parameters
         //
         verifyException("org.mozilla.javascript.ScriptRuntime", e);
      }
  }
}
