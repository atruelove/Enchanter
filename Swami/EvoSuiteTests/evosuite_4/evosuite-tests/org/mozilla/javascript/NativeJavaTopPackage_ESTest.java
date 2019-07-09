/*
 * This file was automatically generated by EvoSuite
 * Thu Aug 02 02:32:36 GMT 2018
 */

package org.mozilla.javascript;

import org.junit.Test;
import static org.junit.Assert.*;
import static org.evosuite.runtime.EvoAssertions.*;
import org.evosuite.runtime.EvoRunner;
import org.evosuite.runtime.EvoRunnerParameters;
import org.junit.runner.RunWith;
import org.mozilla.javascript.Context;
import org.mozilla.javascript.IdFunctionObjectES6;
import org.mozilla.javascript.NativeJavaPackage;
import org.mozilla.javascript.NativeJavaTopPackage;
import org.mozilla.javascript.typedarrays.NativeUint32Array;

@RunWith(EvoRunner.class) @EvoRunnerParameters(mockJVMNonDeterminism = true, useVFS = true, useVNET = true, resetStaticState = true, separateClassLoader = true, useJEE = true) 
public class NativeJavaTopPackage_ESTest extends NativeJavaTopPackage_ESTest_scaffolding {

  @Test(timeout = 4000)
  public void test0()  throws Throwable  {
      Context context0 = Context.enter();
      ClassLoader classLoader0 = ClassLoader.getSystemClassLoader();
      NativeJavaTopPackage nativeJavaTopPackage0 = new NativeJavaTopPackage(classLoader0);
      IdFunctionObjectES6 idFunctionObjectES6_0 = new IdFunctionObjectES6(nativeJavaTopPackage0, nativeJavaTopPackage0, 3, "language version", 11, nativeJavaTopPackage0);
      // Undeclared exception!
      try { 
        nativeJavaTopPackage0.execIdCall(idFunctionObjectES6_0, context0, idFunctionObjectES6_0, nativeJavaTopPackage0, context0.emptyArgs);
        fail("Expecting exception: IllegalArgumentException");
      
      } catch(IllegalArgumentException e) {
         //
         // BAD FUNCTION ID=3 MASTER=[JavaPackage ]
         //
         verifyException("org.mozilla.javascript.IdFunctionObject", e);
      }
  }

  @Test(timeout = 4000)
  public void test1()  throws Throwable  {
      Context context0 = Context.enter();
      ClassLoader classLoader0 = ClassLoader.getSystemClassLoader();
      NativeJavaTopPackage nativeJavaTopPackage0 = new NativeJavaTopPackage(classLoader0);
      NativeUint32Array nativeUint32Array0 = new NativeUint32Array();
      Object[] objectArray0 = new Object[5];
      objectArray0[0] = (Object) classLoader0;
      NativeJavaPackage nativeJavaPackage0 = (NativeJavaPackage)nativeJavaTopPackage0.construct(context0, nativeUint32Array0, objectArray0);
      assertFalse(nativeJavaPackage0.avoidObjectDetection());
  }
}
