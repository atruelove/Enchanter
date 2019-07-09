/**
 * Scaffolding file used to store all the setups needed to run 
 * tests automatically generated by EvoSuite
 * Thu Aug 02 20:53:47 GMT 2018
 */

package org.mozilla.javascript.tools.debugger;

import org.evosuite.runtime.annotation.EvoSuiteClassExclude;
import org.junit.BeforeClass;
import org.junit.Before;
import org.junit.After;
import org.evosuite.runtime.sandbox.Sandbox;
import org.evosuite.runtime.sandbox.Sandbox.SandboxMode;

@EvoSuiteClassExclude
public class MoreWindows_ESTest_scaffolding {

  @org.junit.Rule 
  public org.evosuite.runtime.vnet.NonFunctionalRequirementRule nfr = new org.evosuite.runtime.vnet.NonFunctionalRequirementRule();

  private org.evosuite.runtime.thread.ThreadStopper threadStopper =  new org.evosuite.runtime.thread.ThreadStopper (org.evosuite.runtime.thread.KillSwitchHandler.getInstance(), 3000);


  @BeforeClass 
  public static void initEvoSuiteFramework() { 
    org.evosuite.runtime.RuntimeSettings.className = "org.mozilla.javascript.tools.debugger.MoreWindows"; 
    org.evosuite.runtime.GuiSupport.initialize(); 
    org.evosuite.runtime.RuntimeSettings.maxNumberOfThreads = 100; 
    org.evosuite.runtime.RuntimeSettings.maxNumberOfIterationsPerLoop = 10000; 
    org.evosuite.runtime.RuntimeSettings.mockSystemIn = true; 
    org.evosuite.runtime.RuntimeSettings.sandboxMode = org.evosuite.runtime.sandbox.Sandbox.SandboxMode.RECOMMENDED; 
    org.evosuite.runtime.sandbox.Sandbox.initializeSecurityManagerForSUT(); 
    org.evosuite.runtime.classhandling.JDKClassResetter.init();
    setSystemProperties();
    initializeClasses();
    org.evosuite.runtime.Runtime.getInstance().resetRuntime(); 
  } 

  @Before 
  public void initTestCase(){ 
    threadStopper.storeCurrentThreads();
    threadStopper.startRecordingTime();
    org.evosuite.runtime.jvm.ShutdownHookHandler.getInstance().initHandler(); 
    org.evosuite.runtime.sandbox.Sandbox.goingToExecuteSUTCode(); 
    org.evosuite.runtime.GuiSupport.setHeadless(); 
    org.evosuite.runtime.Runtime.getInstance().resetRuntime(); 
    org.evosuite.runtime.agent.InstrumentingAgent.activate(); 
  } 

  @After 
  public void doneWithTestCase(){ 
    threadStopper.killAndJoinClientThreads();
    org.evosuite.runtime.jvm.ShutdownHookHandler.getInstance().safeExecuteAddedHooks(); 
    org.evosuite.runtime.classhandling.JDKClassResetter.reset(); 
    resetClasses(); 
    org.evosuite.runtime.sandbox.Sandbox.doneWithExecutingSUTCode(); 
    org.evosuite.runtime.agent.InstrumentingAgent.deactivate(); 
    org.evosuite.runtime.GuiSupport.restoreHeadlessMode(); 
  } 

  public static void setSystemProperties() {
 
    /*No java.lang.System property to set*/
  }

  private static void initializeClasses() {
    org.evosuite.runtime.classhandling.ClassStateSupport.initializeClasses(MoreWindows_ESTest_scaffolding.class.getClassLoader() ,
      "org.mozilla.javascript.tools.debugger.MoreWindows",
      "org.mozilla.javascript.tools.debugger.GuiCallback",
      "org.mozilla.javascript.tools.debugger.SwingGui"
    );
  } 

  private static void resetClasses() {
    org.evosuite.runtime.classhandling.ClassResetter.getInstance().setClassLoader(MoreWindows_ESTest_scaffolding.class.getClassLoader()); 

    org.evosuite.runtime.classhandling.ClassStateSupport.resetClasses(
      "org.mozilla.javascript.tools.debugger.MoreWindows",
      "org.mozilla.javascript.tools.debugger.MoreWindows$MouseHandler",
      "org.mozilla.javascript.tools.debugger.MoreWindows$1",
      "org.mozilla.javascript.tools.debugger.SwingGui",
      "org.mozilla.javascript.tools.debugger.Dim",
      "org.mozilla.javascript.tools.debugger.Dim$DimIProxy",
      "org.mozilla.javascript.ScriptableObject$KeyComparator",
      "org.mozilla.javascript.ScriptableObject",
      "org.mozilla.javascript.IdScriptableObject",
      "org.mozilla.javascript.NativeObject",
      "org.mozilla.javascript.Kit",
      "org.mozilla.javascript.ContextFactory",
      "org.mozilla.javascript.ScriptRuntime$DefaultMessageProvider",
      "org.mozilla.javascript.ScriptRuntime",
      "org.mozilla.javascript.optimizer.Codegen",
      "org.mozilla.javascript.Icode",
      "org.mozilla.javascript.Interpreter",
      "org.mozilla.javascript.Context",
      "org.mozilla.javascript.jdk15.VMBridge_jdk15",
      "org.mozilla.javascript.jdk18.VMBridge_jdk18",
      "org.mozilla.javascript.VMBridge",
      "org.mozilla.javascript.SlotMapContainer",
      "org.mozilla.javascript.EmbeddedSlotMap",
      "org.mozilla.javascript.tools.debugger.FileWindow",
      "org.mozilla.javascript.SymbolKey",
      "org.mozilla.javascript.JavaAdapter",
      "org.mozilla.javascript.NativeJavaObject",
      "org.mozilla.javascript.NativeJavaArray",
      "org.mozilla.javascript.JavaMembers",
      "org.mozilla.javascript.ClassCache",
      "org.mozilla.javascript.typedarrays.NativeArrayBufferView",
      "org.mozilla.javascript.typedarrays.NativeTypedArrayView",
      "org.mozilla.javascript.typedarrays.NativeUint32Array",
      "org.mozilla.javascript.typedarrays.NativeArrayBuffer",
      "org.mozilla.javascript.ScriptableObject$SlotAccess",
      "org.mozilla.javascript.ScriptableObject$Slot",
      "org.mozilla.javascript.BaseFunction",
      "org.mozilla.javascript.UniqueTag",
      "org.mozilla.javascript.Scriptable",
      "org.mozilla.javascript.IdFunctionObject",
      "org.mozilla.javascript.TopLevel",
      "org.mozilla.javascript.StackStyle",
      "org.mozilla.javascript.RhinoException",
      "org.mozilla.javascript.EcmaError",
      "org.mozilla.javascript.typedarrays.NativeUint16Array",
      "org.mozilla.javascript.Undefined$1",
      "org.mozilla.javascript.Undefined",
      "org.mozilla.javascript.typedarrays.NativeUint8Array",
      "org.mozilla.javascript.Delegator",
      "org.mozilla.javascript.Synchronizer",
      "org.mozilla.javascript.ImporterTopLevel",
      "org.mozilla.javascript.ObjArray",
      "org.mozilla.javascript.FunctionObject",
      "org.mozilla.javascript.DefaultErrorReporter",
      "org.mozilla.javascript.EvaluatorException",
      "org.mozilla.javascript.typedarrays.NativeInt16Array",
      "org.mozilla.javascript.NativeContinuation",
      "org.mozilla.javascript.typedarrays.NativeFloat32Array",
      "org.mozilla.javascript.NativeJavaClass",
      "org.mozilla.javascript.IdScriptableObject$PrototypeValues",
      "org.mozilla.javascript.EmbeddedSlotMap$1",
      "org.mozilla.javascript.NativeError",
      "org.mozilla.javascript.NativeError$ProtoProps",
      "org.mozilla.javascript.MemberBox",
      "org.mozilla.javascript.ScriptableObject$GetterSlot",
      "org.mozilla.javascript.NativeCallSite",
      "org.mozilla.javascript.NativeGlobal",
      "org.mozilla.javascript.TopLevel$NativeErrors",
      "org.mozilla.javascript.NativeArray$StringLikeComparator",
      "org.mozilla.javascript.NativeArray$ElementComparator",
      "org.mozilla.javascript.NativeArray",
      "org.mozilla.javascript.NativeString",
      "org.mozilla.javascript.NativeBoolean",
      "org.mozilla.javascript.NativeNumber",
      "org.mozilla.javascript.NativeDate",
      "org.mozilla.javascript.NativeMath",
      "org.mozilla.javascript.NativeJSON",
      "org.mozilla.javascript.NativeWith",
      "org.mozilla.javascript.NativeCall",
      "org.mozilla.javascript.NativeScript",
      "org.mozilla.javascript.NativeIterator",
      "org.mozilla.javascript.NativeGenerator",
      "org.mozilla.javascript.NativeIterator$StopIteration",
      "org.mozilla.javascript.ES6Iterator",
      "org.mozilla.javascript.NativeArrayIterator",
      "org.mozilla.javascript.NativeStringIterator",
      "org.mozilla.javascript.xml.XMLLib$Factory",
      "org.mozilla.javascript.xml.XMLLib$Factory$1",
      "org.mozilla.javascript.LazilyLoadedCtor",
      "org.mozilla.javascript.LazilyLoadedCtor$1",
      "org.mozilla.javascript.regexp.NativeRegExp",
      "org.mozilla.javascript.regexp.RECompiled",
      "org.mozilla.javascript.regexp.CompilerState",
      "org.mozilla.javascript.regexp.RENode",
      "org.mozilla.javascript.regexp.NativeRegExpCtor",
      "org.mozilla.javascript.NativeObject$EntrySet",
      "org.mozilla.javascript.NativeObject$EntrySet$1",
      "org.mozilla.javascript.typedarrays.NativeInt8Array",
      "org.mozilla.javascript.NativeSymbol",
      "org.mozilla.javascript.SecurityController",
      "org.mozilla.javascript.WrappedException",
      "org.mozilla.javascript.NativeFunction",
      "org.mozilla.javascript.typedarrays.NativeInt32Array",
      "org.mozilla.javascript.ArrowFunction",
      "org.mozilla.javascript.ScriptRuntime$1",
      "org.mozilla.javascript.typedarrays.Conversions",
      "org.mozilla.javascript.typedarrays.ByteIo",
      "org.mozilla.javascript.EmbeddedSlotMap$Iter",
      "org.mozilla.javascript.v8dtoa.DoubleConversion",
      "org.mozilla.javascript.typedarrays.NativeUint8ClampedArray",
      "org.mozilla.javascript.typedarrays.NativeFloat64Array",
      "org.mozilla.javascript.v8dtoa.FastDtoa",
      "org.mozilla.javascript.v8dtoa.FastDtoaBuilder",
      "org.mozilla.javascript.v8dtoa.DoubleHelper",
      "org.mozilla.javascript.v8dtoa.DiyFp",
      "org.mozilla.javascript.v8dtoa.CachedPowers$CachedPower",
      "org.mozilla.javascript.v8dtoa.CachedPowers",
      "org.mozilla.javascript.BoundFunction",
      "org.mozilla.javascript.IdFunctionObjectES6",
      "org.mozilla.javascript.ContextFactory$1GlobalSetterImpl",
      "org.mozilla.javascript.NativeObject$ValueCollection",
      "org.mozilla.javascript.NativeObject$ValueCollection$1",
      "org.mozilla.javascript.CompilerEnvirons",
      "org.mozilla.javascript.Parser",
      "org.mozilla.javascript.TokenStream",
      "org.mozilla.javascript.ObjToIntMap",
      "org.mozilla.javascript.Node",
      "org.mozilla.javascript.ast.AstNode",
      "org.mozilla.javascript.ast.Jump",
      "org.mozilla.javascript.ast.Scope",
      "org.mozilla.javascript.ast.ScriptNode",
      "org.mozilla.javascript.ast.AstRoot",
      "org.mozilla.javascript.ast.Name",
      "org.mozilla.javascript.ast.ExpressionStatement",
      "org.mozilla.javascript.JavaMembers$MethodSignature",
      "org.mozilla.javascript.NativeJavaMethod",
      "org.mozilla.javascript.BeanProperty",
      "org.mozilla.javascript.WrapFactory",
      "org.mozilla.javascript.NativeObject$KeySet"
    );
  }
}
