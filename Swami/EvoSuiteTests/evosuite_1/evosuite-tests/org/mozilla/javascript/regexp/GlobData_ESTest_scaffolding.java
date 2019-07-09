/**
 * Scaffolding file used to store all the setups needed to run 
 * tests automatically generated by EvoSuite
 * Tue Jul 31 19:36:14 GMT 2018
 */

package org.mozilla.javascript.regexp;

import org.evosuite.runtime.annotation.EvoSuiteClassExclude;
import org.junit.BeforeClass;
import org.junit.Before;
import org.junit.After;
import org.junit.AfterClass;
import org.evosuite.runtime.sandbox.Sandbox;
import org.evosuite.runtime.sandbox.Sandbox.SandboxMode;

@EvoSuiteClassExclude
public class GlobData_ESTest_scaffolding {

  @org.junit.Rule 
  public org.evosuite.runtime.vnet.NonFunctionalRequirementRule nfr = new org.evosuite.runtime.vnet.NonFunctionalRequirementRule();

  private static final java.util.Properties defaultProperties = (java.util.Properties) java.lang.System.getProperties().clone(); 

  private org.evosuite.runtime.thread.ThreadStopper threadStopper =  new org.evosuite.runtime.thread.ThreadStopper (org.evosuite.runtime.thread.KillSwitchHandler.getInstance(), 3000);


  @BeforeClass 
  public static void initEvoSuiteFramework() { 
    org.evosuite.runtime.RuntimeSettings.className = "org.mozilla.javascript.regexp.GlobData"; 
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

  @AfterClass 
  public static void clearEvoSuiteFramework(){ 
    Sandbox.resetDefaultSecurityManager(); 
    java.lang.System.setProperties((java.util.Properties) defaultProperties.clone()); 
  } 

  @Before 
  public void initTestCase(){ 
    threadStopper.storeCurrentThreads();
    threadStopper.startRecordingTime();
    org.evosuite.runtime.jvm.ShutdownHookHandler.getInstance().initHandler(); 
    org.evosuite.runtime.sandbox.Sandbox.goingToExecuteSUTCode(); 
    setSystemProperties(); 
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
 
    java.lang.System.setProperties((java.util.Properties) defaultProperties.clone()); 
    java.lang.System.setProperty("file.encoding", "UTF-8"); 
    java.lang.System.setProperty("java.awt.headless", "true"); 
    java.lang.System.setProperty("java.io.tmpdir", "/tmp"); 
    java.lang.System.setProperty("user.country", "US"); 
    java.lang.System.setProperty("user.dir", "/home/mmotwani/rhino/buildGradle/libs"); 
    java.lang.System.setProperty("user.home", "/home/mmotwani"); 
    java.lang.System.setProperty("user.language", "en"); 
    java.lang.System.setProperty("user.name", "mmotwani"); 
    java.lang.System.setProperty("user.timezone", "America/New_York"); 
  }

  private static void initializeClasses() {
    org.evosuite.runtime.classhandling.ClassStateSupport.initializeClasses(GlobData_ESTest_scaffolding.class.getClassLoader() ,
      "org.mozilla.javascript.NativeBoolean",
      "org.mozilla.javascript.Interpreter",
      "org.mozilla.javascript.ContextListener",
      "org.mozilla.javascript.SymbolScriptable",
      "org.mozilla.javascript.ScriptStackElement",
      "org.mozilla.javascript.ast.ScriptNode",
      "org.mozilla.javascript.NativeDate",
      "org.mozilla.javascript.typedarrays.NativeFloat32Array",
      "org.mozilla.javascript.StackStyle",
      "org.mozilla.javascript.DefaultErrorReporter",
      "org.mozilla.javascript.ExternalArrayData",
      "org.mozilla.javascript.NativeSymbol",
      "org.mozilla.javascript.regexp.NativeRegExpCtor",
      "org.mozilla.javascript.ScriptableObject$SlotAccess",
      "org.mozilla.javascript.BoundFunction",
      "org.mozilla.javascript.UniqueTag",
      "org.mozilla.javascript.Node",
      "org.mozilla.javascript.regexp.REBackTrackData",
      "org.mozilla.javascript.Undefined$1",
      "org.mozilla.javascript.NativeError",
      "org.mozilla.javascript.ContextFactory$Listener",
      "org.mozilla.javascript.typedarrays.NativeTypedArrayView",
      "org.mozilla.javascript.IdScriptableObject$PrototypeValues",
      "org.mozilla.javascript.ContextFactory",
      "org.mozilla.javascript.ast.AstNode",
      "org.mozilla.javascript.SlotMap",
      "org.mozilla.javascript.GeneratedClassLoader",
      "org.mozilla.javascript.Script",
      "org.mozilla.javascript.debug.Debugger",
      "org.mozilla.javascript.Context$ClassShutterSetter",
      "org.mozilla.classfile.ConstantPool",
      "org.mozilla.javascript.ScriptRuntime$MessageProvider",
      "org.mozilla.javascript.RegExpProxy",
      "org.mozilla.javascript.typedarrays.NativeFloat64Array",
      "org.mozilla.javascript.NativeWith",
      "org.mozilla.javascript.ThreadSafeSlotMapContainer",
      "org.mozilla.javascript.EmbeddedSlotMap$Iter",
      "org.mozilla.javascript.EmbeddedSlotMap",
      "org.mozilla.javascript.Undefined",
      "org.mozilla.javascript.NativeJSON",
      "org.mozilla.javascript.Wrapper",
      "org.mozilla.javascript.ScriptRuntime$NoSuchMethodShim",
      "org.mozilla.javascript.NativeGenerator",
      "org.mozilla.javascript.BaseFunction",
      "org.mozilla.javascript.ObjArray",
      "org.mozilla.javascript.SymbolKey",
      "org.mozilla.classfile.ClassFileWriter$MHandle",
      "org.mozilla.javascript.ScriptRuntime",
      "org.mozilla.javascript.ES6Iterator",
      "org.mozilla.javascript.InterpretedFunction",
      "org.mozilla.javascript.typedarrays.NativeTypedArrayIterator",
      "org.mozilla.javascript.EcmaError",
      "org.mozilla.javascript.JavaMembers",
      "org.mozilla.javascript.Ref",
      "org.mozilla.javascript.ast.RegExpLiteral",
      "org.mozilla.javascript.Callable",
      "org.mozilla.javascript.NativeError$ProtoProps",
      "org.mozilla.javascript.NativeJavaPackage",
      "org.mozilla.javascript.NativeJSON$StringifyState",
      "org.mozilla.javascript.NativeFunction",
      "org.mozilla.javascript.NativeObject",
      "org.mozilla.javascript.typedarrays.NativeInt8Array",
      "org.mozilla.javascript.ContextFactory$1GlobalSetterImpl",
      "org.mozilla.javascript.IdFunctionCall",
      "org.mozilla.classfile.ExceptionTableEntry",
      "org.mozilla.javascript.IdFunctionObject",
      "org.mozilla.javascript.NativeString",
      "org.mozilla.javascript.typedarrays.NativeArrayBuffer",
      "org.mozilla.javascript.NativeContinuation",
      "org.mozilla.javascript.NativeCallSite",
      "org.mozilla.javascript.Function",
      "org.mozilla.javascript.Context$2",
      "org.mozilla.javascript.ast.Scope",
      "org.mozilla.javascript.NativeMath",
      "org.mozilla.javascript.Interpreter$CallFrame",
      "org.mozilla.javascript.optimizer.OptFunctionNode",
      "org.mozilla.javascript.NativeJavaObject",
      "org.mozilla.javascript.Context",
      "org.mozilla.javascript.JavaMembers$MethodSignature",
      "org.mozilla.javascript.EvaluatorException",
      "org.mozilla.javascript.JavaScriptException",
      "org.mozilla.classfile.ClassFileWriter$ClassFileFormatException",
      "org.mozilla.javascript.ContinuationPending",
      "org.mozilla.javascript.FunctionObject",
      "org.mozilla.javascript.NativeJavaClass",
      "org.mozilla.javascript.LazilyLoadedCtor$1",
      "org.mozilla.javascript.UintMap",
      "org.mozilla.javascript.ScriptableObject$KeyComparator",
      "org.mozilla.javascript.InterfaceAdapter",
      "org.mozilla.javascript.ScriptRuntime$DefaultMessageProvider",
      "org.mozilla.javascript.ContextFactory$GlobalSetter",
      "org.mozilla.javascript.debug.DebuggableObject",
      "org.mozilla.javascript.regexp.REProgState",
      "org.mozilla.javascript.debug.DebugFrame",
      "org.mozilla.javascript.NativeIterator$WrappedJavaIterator",
      "org.mozilla.javascript.regexp.SubString",
      "org.mozilla.javascript.ObjToIntMap",
      "org.mozilla.javascript.NativeStringIterator",
      "org.mozilla.javascript.Evaluator",
      "org.mozilla.javascript.TopLevel$NativeErrors",
      "org.mozilla.javascript.ast.FunctionNode",
      "org.mozilla.javascript.ast.Comment",
      "org.mozilla.javascript.NativeArray$StringLikeComparator",
      "org.mozilla.javascript.ClassShutter",
      "org.mozilla.javascript.jdk15.VMBridge_jdk15",
      "org.mozilla.javascript.SlotMapContainer",
      "org.mozilla.javascript.Symbol",
      "org.mozilla.javascript.Kit",
      "org.mozilla.javascript.typedarrays.NativeInt16Array",
      "org.mozilla.javascript.ast.Symbol",
      "org.mozilla.javascript.ScriptableObject$Slot",
      "org.mozilla.javascript.RhinoException",
      "org.mozilla.javascript.typedarrays.NativeUint8ClampedArray",
      "org.mozilla.javascript.typedarrays.ByteIo",
      "org.mozilla.javascript.typedarrays.NativeUint8Array",
      "org.mozilla.javascript.ast.NumberLiteral",
      "org.mozilla.javascript.ImporterTopLevel",
      "org.mozilla.javascript.debug.DebuggableScript",
      "org.mozilla.javascript.jdk18.VMBridge_jdk18",
      "org.mozilla.javascript.ClassCache",
      "org.mozilla.javascript.Icode",
      "org.mozilla.javascript.Synchronizer",
      "org.mozilla.javascript.IdScriptableObject",
      "org.mozilla.javascript.optimizer.Codegen",
      "org.mozilla.javascript.NativeArray",
      "org.mozilla.javascript.VMBridge",
      "org.mozilla.javascript.typedarrays.NativeUint16Array",
      "org.mozilla.javascript.regexp.RENode",
      "org.mozilla.javascript.ScriptRuntime$1",
      "org.mozilla.javascript.regexp.REGlobalData",
      "org.mozilla.javascript.regexp.RECompiled",
      "org.mozilla.javascript.LazilyLoadedCtor",
      "org.mozilla.classfile.ClassFileWriter",
      "org.mozilla.javascript.JavaAdapter",
      "org.mozilla.javascript.NativeArrayIterator",
      "org.mozilla.javascript.ast.Jump",
      "org.mozilla.javascript.typedarrays.NativeInt32Array",
      "org.mozilla.javascript.Scriptable",
      "org.mozilla.javascript.NativeJavaArray",
      "org.mozilla.javascript.TopLevel",
      "org.mozilla.javascript.NativeIterator$StopIteration",
      "org.mozilla.javascript.regexp.GlobData",
      "org.mozilla.javascript.MemberBox",
      "org.mozilla.javascript.EmbeddedSlotMap$1",
      "org.mozilla.javascript.regexp.RECharSet",
      "org.mozilla.javascript.Interpreter$GeneratorState",
      "org.mozilla.javascript.Delegator",
      "org.mozilla.javascript.ScriptRuntime$IdEnumeration",
      "org.mozilla.javascript.NativeJavaMethod",
      "org.mozilla.javascript.ast.Name",
      "org.mozilla.javascript.WrappedException",
      "org.mozilla.javascript.regexp.RegExpImpl",
      "org.mozilla.javascript.typedarrays.NativeUint32Array",
      "org.mozilla.javascript.ScriptableObject$GetterSlot",
      "org.mozilla.javascript.NativeCall",
      "org.mozilla.javascript.InterpreterData",
      "org.mozilla.javascript.BeanProperty",
      "org.mozilla.javascript.xml.XMLLib$Factory",
      "org.mozilla.javascript.NativeScript",
      "org.mozilla.javascript.regexp.NativeRegExp",
      "org.mozilla.javascript.xml.XMLLib",
      "org.mozilla.javascript.Node$PropListItem",
      "org.mozilla.javascript.regexp.CompilerState",
      "org.mozilla.javascript.SecurityController",
      "org.mozilla.javascript.ConstProperties",
      "org.mozilla.javascript.ArrowFunction",
      "org.mozilla.javascript.TopLevel$Builtins",
      "org.mozilla.javascript.IdFunctionObjectES6",
      "org.mozilla.javascript.NativeArray$ElementComparator",
      "org.mozilla.javascript.NativeGenerator$GeneratorClosedException",
      "org.mozilla.javascript.WrapFactory",
      "org.mozilla.javascript.NativeIterator",
      "org.mozilla.javascript.NativeNumber",
      "org.mozilla.javascript.json.JsonParser$ParseException",
      "org.mozilla.javascript.ObjToIntMap$Iterator",
      "org.mozilla.javascript.ErrorReporter",
      "org.mozilla.javascript.ScriptableObject",
      "org.mozilla.javascript.NativeGlobal",
      "org.mozilla.javascript.CompilerEnvirons",
      "org.mozilla.javascript.typedarrays.NativeArrayBufferView",
      "org.mozilla.javascript.ContextAction",
      "org.mozilla.javascript.xml.XMLLib$Factory$1",
      "org.mozilla.javascript.ast.NodeVisitor",
      "org.mozilla.javascript.ast.AstRoot"
    );
  } 

  private static void resetClasses() {
    org.evosuite.runtime.classhandling.ClassResetter.getInstance().setClassLoader(GlobData_ESTest_scaffolding.class.getClassLoader()); 

    org.evosuite.runtime.classhandling.ClassStateSupport.resetClasses(
      "org.mozilla.javascript.regexp.GlobData",
      "org.mozilla.javascript.ScriptableObject$KeyComparator",
      "org.mozilla.javascript.ScriptableObject",
      "org.mozilla.javascript.IdScriptableObject",
      "org.mozilla.javascript.TopLevel",
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
      "org.mozilla.javascript.BaseFunction",
      "org.mozilla.javascript.NativeFunction",
      "org.mozilla.javascript.NativeGenerator",
      "org.mozilla.javascript.Delegator",
      "org.mozilla.javascript.Synchronizer",
      "org.mozilla.javascript.typedarrays.NativeArrayBufferView",
      "org.mozilla.javascript.typedarrays.NativeTypedArrayView",
      "org.mozilla.javascript.typedarrays.NativeInt32Array",
      "org.mozilla.javascript.typedarrays.NativeArrayBuffer",
      "org.mozilla.javascript.IdFunctionObject",
      "org.mozilla.javascript.IdFunctionObjectES6",
      "org.mozilla.javascript.UniqueTag",
      "org.mozilla.javascript.Scriptable",
      "org.mozilla.javascript.ClassCache",
      "org.mozilla.javascript.NativeContinuation",
      "org.mozilla.javascript.SecurityController",
      "org.mozilla.javascript.NativeArray$StringLikeComparator",
      "org.mozilla.javascript.NativeArray$ElementComparator",
      "org.mozilla.javascript.NativeArray",
      "org.mozilla.javascript.Undefined$1",
      "org.mozilla.javascript.Undefined",
      "org.mozilla.javascript.WrapFactory",
      "org.mozilla.javascript.JavaAdapter",
      "org.mozilla.javascript.NativeJavaObject",
      "org.mozilla.javascript.JavaMembers",
      "org.mozilla.javascript.typedarrays.NativeUint16Array",
      "org.mozilla.javascript.ImporterTopLevel",
      "org.mozilla.javascript.ObjArray",
      "org.mozilla.javascript.IdScriptableObject$PrototypeValues",
      "org.mozilla.javascript.ScriptableObject$SlotAccess",
      "org.mozilla.javascript.ScriptableObject$Slot",
      "org.mozilla.javascript.EmbeddedSlotMap$1",
      "org.mozilla.javascript.NativeObject",
      "org.mozilla.javascript.NativeError",
      "org.mozilla.javascript.NativeError$ProtoProps",
      "org.mozilla.javascript.MemberBox",
      "org.mozilla.javascript.ScriptableObject$GetterSlot",
      "org.mozilla.javascript.NativeCallSite",
      "org.mozilla.javascript.NativeGlobal",
      "org.mozilla.javascript.TopLevel$NativeErrors",
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
      "org.mozilla.javascript.NativeIterator$StopIteration",
      "org.mozilla.javascript.ES6Iterator",
      "org.mozilla.javascript.NativeArrayIterator",
      "org.mozilla.javascript.NativeStringIterator",
      "org.mozilla.javascript.xml.XMLLib$Factory",
      "org.mozilla.javascript.xml.XMLLib$Factory$1",
      "org.mozilla.javascript.LazilyLoadedCtor",
      "org.mozilla.javascript.LazilyLoadedCtor$1",
      "org.mozilla.javascript.regexp.NativeRegExp",
      "org.mozilla.javascript.FunctionObject",
      "org.mozilla.javascript.regexp.RECompiled",
      "org.mozilla.javascript.regexp.CompilerState",
      "org.mozilla.javascript.regexp.RENode",
      "org.mozilla.javascript.regexp.NativeRegExpCtor",
      "org.mozilla.javascript.NativeJavaClass",
      "org.mozilla.javascript.typedarrays.NativeFloat64Array",
      "org.mozilla.javascript.BoundFunction",
      "org.mozilla.javascript.typedarrays.NativeInt16Array",
      "org.mozilla.javascript.StackStyle",
      "org.mozilla.javascript.RhinoException",
      "org.mozilla.javascript.EcmaError",
      "org.mozilla.javascript.typedarrays.NativeInt8Array",
      "org.mozilla.javascript.typedarrays.NativeUint8ClampedArray",
      "org.mozilla.javascript.typedarrays.NativeUint8Array",
      "org.mozilla.javascript.NativeJavaArray",
      "org.mozilla.javascript.typedarrays.NativeFloat32Array",
      "org.mozilla.javascript.typedarrays.NativeUint32Array",
      "org.mozilla.javascript.SymbolKey",
      "org.mozilla.javascript.ArrowFunction",
      "org.mozilla.javascript.ScriptRuntime$1",
      "org.mozilla.javascript.ContextFactory$1GlobalSetterImpl",
      "org.mozilla.javascript.DefaultErrorReporter",
      "org.mozilla.javascript.EvaluatorException",
      "org.mozilla.javascript.NativeSymbol",
      "org.mozilla.javascript.Context$2",
      "org.mozilla.javascript.typedarrays.NativeTypedArrayIterator",
      "org.mozilla.javascript.typedarrays.ByteIo",
      "org.mozilla.javascript.WrappedException",
      "org.mozilla.javascript.EmbeddedSlotMap$Iter",
      "org.mozilla.javascript.NativeJavaMethod",
      "org.mozilla.javascript.JavaMembers$MethodSignature",
      "org.mozilla.javascript.BeanProperty"
    );
  }
}
