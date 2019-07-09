/*
 * This file was automatically generated by EvoSuite
 * Fri Aug 03 00:38:57 GMT 2018
 */

package org.mozilla.javascript.commonjs.module;

import org.junit.Test;
import static org.junit.Assert.*;
import static org.evosuite.shaded.org.mockito.Mockito.*;
import static org.evosuite.runtime.EvoAssertions.*;
import java.net.URI;
import java.util.ArrayDeque;
import java.util.Comparator;
import java.util.LinkedHashSet;
import java.util.LinkedList;
import java.util.TreeSet;
import org.evosuite.runtime.EvoRunner;
import org.evosuite.runtime.EvoRunnerParameters;
import org.evosuite.runtime.ViolatedAssumptionAnswer;
import org.evosuite.runtime.mock.java.net.MockURI;
import org.junit.runner.RunWith;
import org.mozilla.javascript.BaseFunction;
import org.mozilla.javascript.BoundFunction;
import org.mozilla.javascript.Context;
import org.mozilla.javascript.ContextFactory;
import org.mozilla.javascript.NativeObject;
import org.mozilla.javascript.Script;
import org.mozilla.javascript.Scriptable;
import org.mozilla.javascript.commonjs.module.ModuleScriptProvider;
import org.mozilla.javascript.commonjs.module.Require;
import org.mozilla.javascript.commonjs.module.provider.DefaultUrlConnectionExpiryCalculator;
import org.mozilla.javascript.commonjs.module.provider.ModuleSourceProvider;
import org.mozilla.javascript.commonjs.module.provider.MultiModuleScriptProvider;
import org.mozilla.javascript.commonjs.module.provider.SoftCachingModuleScriptProvider;
import org.mozilla.javascript.commonjs.module.provider.StrongCachingModuleScriptProvider;
import org.mozilla.javascript.commonjs.module.provider.UrlConnectionSecurityDomainProvider;
import org.mozilla.javascript.commonjs.module.provider.UrlModuleSourceProvider;
import org.mozilla.javascript.typedarrays.NativeArrayBuffer;
import org.mozilla.javascript.typedarrays.NativeInt16Array;
import org.mozilla.javascript.typedarrays.NativeUint8Array;
import org.mozilla.javascript.typedarrays.NativeUint8ClampedArray;

@RunWith(EvoRunner.class) @EvoRunnerParameters(mockJVMNonDeterminism = true, useVFS = true, useVNET = true, resetStaticState = true, separateClassLoader = true, useJEE = true) 
public class Require_ESTest extends Require_ESTest_scaffolding {

  @Test(timeout = 4000)
  public void test00()  throws Throwable  {
      ContextFactory contextFactory0 = new ContextFactory();
      Context context0 = contextFactory0.enterContext();
      NativeUint8ClampedArray nativeUint8ClampedArray0 = new NativeUint8ClampedArray((NativeArrayBuffer) null, 2, (-579));
      LinkedHashSet<ModuleScriptProvider> linkedHashSet0 = new LinkedHashSet<ModuleScriptProvider>();
      LinkedList<ModuleScriptProvider> linkedList0 = new LinkedList<ModuleScriptProvider>(linkedHashSet0);
      MultiModuleScriptProvider multiModuleScriptProvider0 = new MultiModuleScriptProvider(linkedList0);
      Script script0 = context0.compileString("O", "error reporter", 6, (Object) null);
      Require require0 = new Require(context0, nativeUint8ClampedArray0, multiModuleScriptProvider0, script0, script0, false);
      // Undeclared exception!
      try { 
        require0.requireMain(context0, "");
        fail("Expecting exception: RuntimeException");
      
      } catch(RuntimeException e) {
         //
         // Constructor for \"Error\" not found.
         //
         verifyException("org.mozilla.javascript.DefaultErrorReporter", e);
      }
  }

  @Test(timeout = 4000)
  public void test01()  throws Throwable  {
      Context context0 = Context.enter();
      NativeArrayBuffer nativeArrayBuffer0 = NativeArrayBuffer.EMPTY_BUFFER;
      NativeUint8Array nativeUint8Array0 = new NativeUint8Array();
      BaseFunction baseFunction0 = new BaseFunction(nativeUint8Array0, nativeArrayBuffer0);
      TreeSet<URI> treeSet0 = new TreeSet<URI>();
      DefaultUrlConnectionExpiryCalculator defaultUrlConnectionExpiryCalculator0 = new DefaultUrlConnectionExpiryCalculator();
      UrlConnectionSecurityDomainProvider urlConnectionSecurityDomainProvider0 = mock(UrlConnectionSecurityDomainProvider.class, new ViolatedAssumptionAnswer());
      UrlModuleSourceProvider urlModuleSourceProvider0 = new UrlModuleSourceProvider(treeSet0, treeSet0, defaultUrlConnectionExpiryCalculator0, urlConnectionSecurityDomainProvider0);
      StrongCachingModuleScriptProvider strongCachingModuleScriptProvider0 = new StrongCachingModuleScriptProvider(urlModuleSourceProvider0);
      Require require0 = new Require(context0, baseFunction0, strongCachingModuleScriptProvider0, (Script) null, (Script) null, false);
      // Undeclared exception!
      try { 
        require0.requireMain(context0, "error reporter");
        fail("Expecting exception: NullPointerException");
      
      } catch(NullPointerException e) {
         //
         // no message in exception (getMessage() returned null)
         //
         verifyException("org.mozilla.javascript.commonjs.module.provider.UrlModuleSourceProvider", e);
      }
  }

  @Test(timeout = 4000)
  public void test02()  throws Throwable  {
      Context context0 = Context.getCurrentContext();
      NativeObject nativeObject0 = new NativeObject();
      Comparator<Object> comparator0 = (Comparator<Object>) mock(Comparator.class, new ViolatedAssumptionAnswer());
      doReturn(0).when(comparator0).compare(any() , any());
      TreeSet<URI> treeSet0 = new TreeSet<URI>(comparator0);
      UrlModuleSourceProvider urlModuleSourceProvider0 = new UrlModuleSourceProvider(treeSet0, treeSet0);
      SoftCachingModuleScriptProvider softCachingModuleScriptProvider0 = new SoftCachingModuleScriptProvider(urlModuleSourceProvider0);
      Require require0 = new Require(context0, nativeObject0, softCachingModuleScriptProvider0, (Script) null, (Script) null, true);
      URI uRI0 = MockURI.aHttpURI;
      treeSet0.add(uRI0);
      // Undeclared exception!
      try { 
        require0.requireMain(context0, "org");
        fail("Expecting exception: RuntimeException");
      
      } catch(RuntimeException e) {
         //
         // org.evosuite.runtime.mock.java.lang.MockThrowable: Could not find: foo.barorg.js
         //
         verifyException("org.mozilla.javascript.commonjs.module.Require", e);
      }
  }

  @Test(timeout = 4000)
  public void test03()  throws Throwable  {
      Context context0 = Context.enter();
      NativeArrayBuffer nativeArrayBuffer0 = NativeArrayBuffer.EMPTY_BUFFER;
      NativeUint8Array nativeUint8Array0 = new NativeUint8Array();
      BaseFunction baseFunction0 = new BaseFunction(nativeUint8Array0, nativeArrayBuffer0);
      StrongCachingModuleScriptProvider strongCachingModuleScriptProvider0 = new StrongCachingModuleScriptProvider((ModuleSourceProvider) null);
      Require require0 = new Require(context0, baseFunction0, strongCachingModuleScriptProvider0, (Script) null, (Script) null, false);
      // Undeclared exception!
      try { 
        require0.requireMain(context0, "error reporter");
        fail("Expecting exception: NullPointerException");
      
      } catch(NullPointerException e) {
         //
         // no message in exception (getMessage() returned null)
         //
         verifyException("org.mozilla.javascript.commonjs.module.provider.CachingModuleScriptProviderBase", e);
      }
  }

  @Test(timeout = 4000)
  public void test04()  throws Throwable  {
      Context context0 = Context.enter();
      NativeUint8ClampedArray nativeUint8ClampedArray0 = new NativeUint8ClampedArray(16);
      LinkedHashSet<ModuleScriptProvider> linkedHashSet0 = new LinkedHashSet<ModuleScriptProvider>();
      LinkedList<ModuleScriptProvider> linkedList0 = new LinkedList<ModuleScriptProvider>(linkedHashSet0);
      MultiModuleScriptProvider multiModuleScriptProvider0 = new MultiModuleScriptProvider(linkedList0);
      Script script0 = context0.compileString("O", "error reporter", 6, (Object) null);
      Require require0 = new Require(context0, nativeUint8ClampedArray0, multiModuleScriptProvider0, script0, script0, true);
      require0.requireMain(context0, "O");
      // Undeclared exception!
      try { 
        require0.requireMain(context0, "error reporter");
        fail("Expecting exception: IllegalStateException");
      
      } catch(IllegalStateException e) {
         //
         // Main module already set to O
         //
         verifyException("org.mozilla.javascript.commonjs.module.Require", e);
      }
  }

  @Test(timeout = 4000)
  public void test05()  throws Throwable  {
      Context context0 = Context.enter();
      NativeUint8ClampedArray nativeUint8ClampedArray0 = new NativeUint8ClampedArray(16);
      LinkedHashSet<ModuleScriptProvider> linkedHashSet0 = new LinkedHashSet<ModuleScriptProvider>();
      LinkedList<ModuleScriptProvider> linkedList0 = new LinkedList<ModuleScriptProvider>(linkedHashSet0);
      MultiModuleScriptProvider multiModuleScriptProvider0 = new MultiModuleScriptProvider(linkedList0);
      Script script0 = context0.compileString("O", "error reporter", 6, (Object) null);
      Require require0 = new Require(context0, nativeUint8ClampedArray0, multiModuleScriptProvider0, script0, script0, true);
      require0.requireMain(context0, "O");
      Scriptable scriptable0 = require0.requireMain(context0, "O");
      assertNull(scriptable0);
  }

  @Test(timeout = 4000)
  public void test06()  throws Throwable  {
      Context context0 = Context.enter();
      NativeArrayBuffer nativeArrayBuffer0 = NativeArrayBuffer.EMPTY_BUFFER;
      NativeUint8Array nativeUint8Array0 = new NativeUint8Array();
      BaseFunction baseFunction0 = new BaseFunction(nativeUint8Array0, nativeArrayBuffer0);
      TreeSet<URI> treeSet0 = new TreeSet<URI>();
      DefaultUrlConnectionExpiryCalculator defaultUrlConnectionExpiryCalculator0 = new DefaultUrlConnectionExpiryCalculator();
      UrlConnectionSecurityDomainProvider urlConnectionSecurityDomainProvider0 = mock(UrlConnectionSecurityDomainProvider.class, new ViolatedAssumptionAnswer());
      UrlModuleSourceProvider urlModuleSourceProvider0 = new UrlModuleSourceProvider(treeSet0, treeSet0, defaultUrlConnectionExpiryCalculator0, urlConnectionSecurityDomainProvider0);
      StrongCachingModuleScriptProvider strongCachingModuleScriptProvider0 = new StrongCachingModuleScriptProvider(urlModuleSourceProvider0);
      Require require0 = new Require(context0, baseFunction0, strongCachingModuleScriptProvider0, (Script) null, (Script) null, false);
      require0.install(nativeUint8Array0);
      assertFalse(require0.isSealed());
  }

  @Test(timeout = 4000)
  public void test07()  throws Throwable  {
      ContextFactory contextFactory0 = new ContextFactory();
      Context context0 = contextFactory0.enterContext();
      NativeUint8ClampedArray nativeUint8ClampedArray0 = new NativeUint8ClampedArray((NativeArrayBuffer) null, 2, (-579));
      LinkedHashSet<ModuleScriptProvider> linkedHashSet0 = new LinkedHashSet<ModuleScriptProvider>();
      LinkedList<ModuleScriptProvider> linkedList0 = new LinkedList<ModuleScriptProvider>(linkedHashSet0);
      MultiModuleScriptProvider multiModuleScriptProvider0 = new MultiModuleScriptProvider(linkedList0);
      Script script0 = context0.compileString("O", "error reporter", 6, (Object) null);
      Require require0 = new Require(context0, nativeUint8ClampedArray0, multiModuleScriptProvider0, script0, script0, true);
      BoundFunction boundFunction0 = null;
      try {
        boundFunction0 = new BoundFunction(context0, (Scriptable) null, require0, (Scriptable) null, context0.emptyArgs);
        fail("Expecting exception: NullPointerException");
      
      } catch(NullPointerException e) {
         //
         // no message in exception (getMessage() returned null)
         //
         verifyException("org.mozilla.javascript.ScriptableObject", e);
      }
  }

  @Test(timeout = 4000)
  public void test08()  throws Throwable  {
      Context context0 = Context.enter();
      NativeArrayBuffer nativeArrayBuffer0 = NativeArrayBuffer.EMPTY_BUFFER;
      NativeUint8Array nativeUint8Array0 = new NativeUint8Array();
      BaseFunction baseFunction0 = new BaseFunction(nativeUint8Array0, nativeArrayBuffer0);
      TreeSet<URI> treeSet0 = new TreeSet<URI>();
      DefaultUrlConnectionExpiryCalculator defaultUrlConnectionExpiryCalculator0 = new DefaultUrlConnectionExpiryCalculator();
      UrlConnectionSecurityDomainProvider urlConnectionSecurityDomainProvider0 = mock(UrlConnectionSecurityDomainProvider.class, new ViolatedAssumptionAnswer());
      UrlModuleSourceProvider urlModuleSourceProvider0 = new UrlModuleSourceProvider(treeSet0, treeSet0, defaultUrlConnectionExpiryCalculator0, urlConnectionSecurityDomainProvider0);
      StrongCachingModuleScriptProvider strongCachingModuleScriptProvider0 = new StrongCachingModuleScriptProvider(urlModuleSourceProvider0);
      Require require0 = new Require(context0, baseFunction0, strongCachingModuleScriptProvider0, (Script) null, (Script) null, false);
      String string0 = require0.getFunctionName();
      assertEquals("require", string0);
  }

  @Test(timeout = 4000)
  public void test09()  throws Throwable  {
      Context context0 = Context.enter();
      NativeArrayBuffer nativeArrayBuffer0 = NativeArrayBuffer.EMPTY_BUFFER;
      NativeUint8Array nativeUint8Array0 = new NativeUint8Array();
      BaseFunction baseFunction0 = new BaseFunction(nativeUint8Array0, nativeArrayBuffer0);
      StrongCachingModuleScriptProvider strongCachingModuleScriptProvider0 = new StrongCachingModuleScriptProvider((ModuleSourceProvider) null);
      Require require0 = new Require(context0, baseFunction0, strongCachingModuleScriptProvider0, (Script) null, (Script) null, false);
      int int0 = require0.getArity();
      assertEquals(1, int0);
  }

  @Test(timeout = 4000)
  public void test10()  throws Throwable  {
      Context context0 = Context.enter();
      ArrayDeque<MultiModuleScriptProvider> arrayDeque0 = new ArrayDeque<MultiModuleScriptProvider>();
      NativeInt16Array nativeInt16Array0 = new NativeInt16Array(130);
      MultiModuleScriptProvider multiModuleScriptProvider0 = new MultiModuleScriptProvider(arrayDeque0);
      Require require0 = new Require(context0, nativeInt16Array0, multiModuleScriptProvider0, (Script) null, (Script) null, true);
      // Undeclared exception!
      try { 
        require0.call(context0, nativeInt16Array0, nativeInt16Array0, context0.emptyArgs);
        fail("Expecting exception: RuntimeException");
      
      } catch(RuntimeException e) {
         //
         // Constructor for \"Error\" not found.
         //
         verifyException("org.mozilla.javascript.DefaultErrorReporter", e);
      }
  }
}
