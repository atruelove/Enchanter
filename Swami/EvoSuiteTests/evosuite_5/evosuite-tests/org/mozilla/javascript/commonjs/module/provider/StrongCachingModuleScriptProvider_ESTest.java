/*
 * This file was automatically generated by EvoSuite
 * Fri Aug 03 00:28:31 GMT 2018
 */

package org.mozilla.javascript.commonjs.module.provider;

import org.junit.Test;
import static org.junit.Assert.*;
import static org.evosuite.shaded.org.mockito.Mockito.*;
import java.net.URI;
import java.util.Comparator;
import java.util.TreeSet;
import org.evosuite.runtime.EvoRunner;
import org.evosuite.runtime.EvoRunnerParameters;
import org.evosuite.runtime.ViolatedAssumptionAnswer;
import org.junit.runner.RunWith;
import org.mozilla.javascript.Context;
import org.mozilla.javascript.commonjs.module.ModuleScript;
import org.mozilla.javascript.commonjs.module.provider.StrongCachingModuleScriptProvider;
import org.mozilla.javascript.commonjs.module.provider.UrlModuleSourceProvider;
import org.mozilla.javascript.typedarrays.NativeInt8Array;

@RunWith(EvoRunner.class) @EvoRunnerParameters(mockJVMNonDeterminism = true, useVFS = true, useVNET = true, resetStaticState = true, separateClassLoader = true, useJEE = true) 
public class StrongCachingModuleScriptProvider_ESTest extends StrongCachingModuleScriptProvider_ESTest_scaffolding {

  @Test(timeout = 4000)
  public void test0()  throws Throwable  {
      Comparator<Object> comparator0 = (Comparator<Object>) mock(Comparator.class, new ViolatedAssumptionAnswer());
      TreeSet<URI> treeSet0 = new TreeSet<URI>(comparator0);
      UrlModuleSourceProvider urlModuleSourceProvider0 = new UrlModuleSourceProvider(treeSet0, treeSet0);
      StrongCachingModuleScriptProvider strongCachingModuleScriptProvider0 = new StrongCachingModuleScriptProvider(urlModuleSourceProvider0);
      strongCachingModuleScriptProvider0.putLoadedModule("y.A)", (ModuleScript) null, "/'{");
  }

  @Test(timeout = 4000)
  public void test1()  throws Throwable  {
      Comparator<Object> comparator0 = (Comparator<Object>) mock(Comparator.class, new ViolatedAssumptionAnswer());
      TreeSet<URI> treeSet0 = new TreeSet<URI>(comparator0);
      UrlModuleSourceProvider urlModuleSourceProvider0 = new UrlModuleSourceProvider(treeSet0, treeSet0);
      StrongCachingModuleScriptProvider strongCachingModuleScriptProvider0 = new StrongCachingModuleScriptProvider(urlModuleSourceProvider0);
      Context context0 = Context.enter();
      NativeInt8Array nativeInt8Array0 = new NativeInt8Array();
      ModuleScript moduleScript0 = strongCachingModuleScriptProvider0.getModuleScript(context0, "setUTCDate", (URI) null, (URI) null, nativeInt8Array0);
      assertNull(moduleScript0);
  }
}
