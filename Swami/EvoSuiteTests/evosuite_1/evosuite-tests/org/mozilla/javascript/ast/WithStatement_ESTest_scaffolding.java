/**
 * Scaffolding file used to store all the setups needed to run 
 * tests automatically generated by EvoSuite
 * Tue Jul 31 18:17:57 GMT 2018
 */

package org.mozilla.javascript.ast;

import org.evosuite.runtime.annotation.EvoSuiteClassExclude;
import org.junit.BeforeClass;
import org.junit.Before;
import org.junit.After;
import org.junit.AfterClass;
import org.evosuite.runtime.sandbox.Sandbox;
import org.evosuite.runtime.sandbox.Sandbox.SandboxMode;

@EvoSuiteClassExclude
public class WithStatement_ESTest_scaffolding {

  @org.junit.Rule 
  public org.evosuite.runtime.vnet.NonFunctionalRequirementRule nfr = new org.evosuite.runtime.vnet.NonFunctionalRequirementRule();

  private static final java.util.Properties defaultProperties = (java.util.Properties) java.lang.System.getProperties().clone(); 

  private org.evosuite.runtime.thread.ThreadStopper threadStopper =  new org.evosuite.runtime.thread.ThreadStopper (org.evosuite.runtime.thread.KillSwitchHandler.getInstance(), 3000);


  @BeforeClass 
  public static void initEvoSuiteFramework() { 
    org.evosuite.runtime.RuntimeSettings.className = "org.mozilla.javascript.ast.WithStatement"; 
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
    org.evosuite.runtime.classhandling.ClassStateSupport.initializeClasses(WithStatement_ESTest_scaffolding.class.getClassLoader() ,
      "org.mozilla.javascript.ast.ObjectLiteral",
      "org.mozilla.javascript.Interpreter",
      "org.mozilla.javascript.ContextListener",
      "org.mozilla.javascript.NativeBoolean",
      "org.mozilla.javascript.SymbolScriptable",
      "org.mozilla.javascript.ScriptStackElement",
      "org.mozilla.javascript.ast.Assignment",
      "org.mozilla.javascript.ast.WhileLoop",
      "org.mozilla.javascript.ast.ForLoop",
      "org.mozilla.javascript.ast.ScriptNode",
      "org.mozilla.javascript.ast.EmptyStatement",
      "org.mozilla.javascript.StackStyle",
      "org.mozilla.javascript.ast.XmlString",
      "org.mozilla.javascript.ExternalArrayData",
      "org.mozilla.javascript.NativeSymbol",
      "org.mozilla.javascript.ScriptableObject$SlotAccess",
      "org.mozilla.javascript.ast.GeneratorExpression",
      "org.mozilla.javascript.UniqueTag",
      "org.mozilla.javascript.Node",
      "org.mozilla.javascript.ast.PropertyGet",
      "org.mozilla.javascript.ast.XmlPropRef",
      "org.mozilla.javascript.ast.ParenthesizedExpression",
      "org.mozilla.javascript.ContextFactory$Listener",
      "org.mozilla.javascript.ContextFactory",
      "org.mozilla.javascript.ast.AstNode",
      "org.mozilla.javascript.ast.GeneratorExpressionLoop",
      "org.mozilla.javascript.SlotMap",
      "org.mozilla.javascript.GeneratedClassLoader",
      "org.mozilla.javascript.Script",
      "org.mozilla.javascript.debug.Debugger",
      "org.mozilla.javascript.Context$ClassShutterSetter",
      "org.mozilla.classfile.ConstantPool",
      "org.mozilla.javascript.Token",
      "org.mozilla.javascript.RegExpProxy",
      "org.mozilla.javascript.ScriptRuntime$MessageProvider",
      "org.mozilla.javascript.ThreadSafeSlotMapContainer",
      "org.mozilla.javascript.ast.ObjectProperty",
      "org.mozilla.javascript.Wrapper",
      "org.mozilla.javascript.ScriptRuntime$NoSuchMethodShim",
      "org.mozilla.javascript.ast.InfixExpression",
      "org.mozilla.javascript.BaseFunction",
      "org.mozilla.javascript.ast.Loop",
      "org.mozilla.javascript.ObjArray",
      "org.mozilla.javascript.ast.LetNode",
      "org.mozilla.javascript.ast.SwitchStatement",
      "org.mozilla.javascript.ast.XmlRef",
      "org.mozilla.javascript.SymbolKey",
      "org.mozilla.classfile.ClassFileWriter$MHandle",
      "org.mozilla.javascript.ScriptRuntime",
      "org.mozilla.javascript.InterpretedFunction",
      "org.mozilla.javascript.EcmaError",
      "org.mozilla.javascript.Ref",
      "org.mozilla.javascript.ast.RegExpLiteral",
      "org.mozilla.javascript.Callable",
      "org.mozilla.javascript.NativeJavaPackage",
      "org.mozilla.javascript.ast.ConditionalExpression",
      "org.mozilla.javascript.NativeFunction",
      "org.mozilla.javascript.NativeObject",
      "org.mozilla.javascript.IdFunctionCall",
      "org.mozilla.classfile.ExceptionTableEntry",
      "org.mozilla.javascript.IdFunctionObject",
      "org.mozilla.javascript.NativeString",
      "org.mozilla.javascript.NativeContinuation",
      "org.mozilla.javascript.Function",
      "org.mozilla.javascript.ast.Scope",
      "org.mozilla.javascript.Interpreter$CallFrame",
      "org.mozilla.javascript.ast.DestructuringForm",
      "org.mozilla.javascript.optimizer.OptFunctionNode",
      "org.mozilla.javascript.NativeJavaObject",
      "org.mozilla.javascript.Context",
      "org.mozilla.javascript.EvaluatorException",
      "org.mozilla.javascript.JavaScriptException",
      "org.mozilla.classfile.ClassFileWriter$ClassFileFormatException",
      "org.mozilla.javascript.ContinuationPending",
      "org.mozilla.javascript.FunctionObject",
      "org.mozilla.javascript.NativeJavaClass",
      "org.mozilla.javascript.UintMap",
      "org.mozilla.javascript.ScriptableObject$KeyComparator",
      "org.mozilla.javascript.ast.LabeledStatement",
      "org.mozilla.javascript.ScriptRuntime$DefaultMessageProvider",
      "org.mozilla.javascript.ast.ArrayLiteral",
      "org.mozilla.javascript.ContextFactory$GlobalSetter",
      "org.mozilla.javascript.debug.DebuggableObject",
      "org.mozilla.javascript.ast.BreakStatement",
      "org.mozilla.javascript.ast.WithStatement",
      "org.mozilla.javascript.Node$NodeIterator",
      "org.mozilla.javascript.debug.DebugFrame",
      "org.mozilla.javascript.ObjToIntMap",
      "org.mozilla.javascript.Evaluator",
      "org.mozilla.javascript.ast.Comment",
      "org.mozilla.javascript.ast.FunctionNode",
      "org.mozilla.javascript.TopLevel$NativeErrors",
      "org.mozilla.javascript.NativeArray$StringLikeComparator",
      "org.mozilla.javascript.ClassShutter",
      "org.mozilla.javascript.SlotMapContainer",
      "org.mozilla.javascript.Kit",
      "org.mozilla.javascript.Symbol",
      "org.mozilla.javascript.ast.NewExpression",
      "org.mozilla.javascript.Token$CommentType",
      "org.mozilla.javascript.ast.Symbol",
      "org.mozilla.javascript.ScriptableObject$Slot",
      "org.mozilla.javascript.RhinoException",
      "org.mozilla.javascript.ast.ContinueStatement",
      "org.mozilla.javascript.ast.Yield",
      "org.mozilla.javascript.ast.NumberLiteral",
      "org.mozilla.javascript.ImporterTopLevel",
      "org.mozilla.javascript.ast.XmlFragment",
      "org.mozilla.javascript.debug.DebuggableScript",
      "org.mozilla.javascript.ast.FunctionNode$Form",
      "org.mozilla.javascript.Icode",
      "org.mozilla.javascript.ast.StringLiteral",
      "org.mozilla.javascript.ast.CatchClause",
      "org.mozilla.javascript.ast.ExpressionStatement",
      "org.mozilla.javascript.optimizer.Codegen",
      "org.mozilla.javascript.IdScriptableObject",
      "org.mozilla.javascript.NativeArray",
      "org.mozilla.javascript.ast.XmlExpression",
      "org.mozilla.javascript.ast.XmlMemberGet",
      "org.mozilla.javascript.ast.Label",
      "org.mozilla.javascript.ast.FunctionCall",
      "org.mozilla.javascript.ScriptRuntime$1",
      "org.mozilla.javascript.ast.TryStatement",
      "org.mozilla.classfile.ClassFileWriter",
      "org.mozilla.javascript.LazilyLoadedCtor",
      "org.mozilla.javascript.JavaAdapter",
      "org.mozilla.javascript.ast.Jump",
      "org.mozilla.javascript.ast.UnaryExpression",
      "org.mozilla.javascript.ast.ArrayComprehensionLoop",
      "org.mozilla.javascript.Scriptable",
      "org.mozilla.javascript.ast.IfStatement",
      "org.mozilla.javascript.ast.ReturnStatement",
      "org.mozilla.javascript.ast.SwitchCase",
      "org.mozilla.javascript.TopLevel",
      "org.mozilla.javascript.MemberBox",
      "org.mozilla.javascript.ast.ErrorNode",
      "org.mozilla.javascript.ast.ArrayComprehension",
      "org.mozilla.javascript.ast.XmlLiteral",
      "org.mozilla.javascript.Interpreter$GeneratorState",
      "org.mozilla.javascript.ScriptRuntime$IdEnumeration",
      "org.mozilla.javascript.ast.VariableInitializer",
      "org.mozilla.javascript.ast.Block",
      "org.mozilla.javascript.ast.VariableDeclaration",
      "org.mozilla.javascript.ast.Name",
      "org.mozilla.javascript.ast.EmptyExpression",
      "org.mozilla.javascript.WrappedException",
      "org.mozilla.javascript.ast.ThrowStatement",
      "org.mozilla.javascript.InterpreterData",
      "org.mozilla.javascript.NativeCall",
      "org.mozilla.javascript.xml.XMLLib$Factory",
      "org.mozilla.javascript.Node$PropListItem",
      "org.mozilla.javascript.ast.ForInLoop",
      "org.mozilla.javascript.xml.XMLLib",
      "org.mozilla.javascript.SecurityController",
      "org.mozilla.javascript.ast.XmlElemRef",
      "org.mozilla.javascript.ConstProperties",
      "org.mozilla.javascript.ast.XmlDotQuery",
      "org.mozilla.javascript.ast.AstRoot$1",
      "org.mozilla.javascript.TopLevel$Builtins",
      "org.mozilla.javascript.IdFunctionObjectES6",
      "org.mozilla.javascript.NativeArray$ElementComparator",
      "org.mozilla.javascript.WrapFactory",
      "org.mozilla.javascript.NativeNumber",
      "org.mozilla.javascript.ObjToIntMap$Iterator",
      "org.mozilla.javascript.ErrorReporter",
      "org.mozilla.javascript.ast.AstNode$DebugPrintVisitor",
      "org.mozilla.javascript.ast.DoLoop",
      "org.mozilla.javascript.ScriptableObject",
      "org.mozilla.javascript.CompilerEnvirons",
      "org.mozilla.javascript.ast.KeywordLiteral",
      "org.mozilla.javascript.ContextAction",
      "org.mozilla.javascript.ast.NodeVisitor",
      "org.mozilla.javascript.ast.AstRoot",
      "org.mozilla.javascript.xml.XMLLib$Factory$1",
      "org.mozilla.javascript.ast.ElementGet"
    );
  } 

  private static void resetClasses() {
    org.evosuite.runtime.classhandling.ClassResetter.getInstance().setClassLoader(WithStatement_ESTest_scaffolding.class.getClassLoader()); 

    org.evosuite.runtime.classhandling.ClassStateSupport.resetClasses(
      "org.mozilla.javascript.Node",
      "org.mozilla.javascript.ast.AstNode",
      "org.mozilla.javascript.ast.WithStatement",
      "org.mozilla.javascript.ast.Name",
      "org.mozilla.javascript.Node$PropListItem",
      "org.mozilla.javascript.ast.Comment",
      "org.mozilla.javascript.ast.Jump",
      "org.mozilla.javascript.ast.Scope",
      "org.mozilla.javascript.ast.ArrayComprehension",
      "org.mozilla.javascript.ast.UnaryExpression",
      "org.mozilla.javascript.Token",
      "org.mozilla.javascript.Node$NodeIterator",
      "org.mozilla.javascript.Kit",
      "org.mozilla.javascript.ast.InfixExpression",
      "org.mozilla.javascript.ast.Assignment",
      "org.mozilla.javascript.ast.ContinueStatement",
      "org.mozilla.javascript.ast.ScriptNode",
      "org.mozilla.javascript.ast.AstRoot",
      "org.mozilla.javascript.ast.NumberLiteral",
      "org.mozilla.javascript.ast.KeywordLiteral",
      "org.mozilla.javascript.ast.ExpressionStatement",
      "org.mozilla.javascript.ast.Loop",
      "org.mozilla.javascript.ast.ForInLoop",
      "org.mozilla.javascript.ast.GeneratorExpressionLoop",
      "org.mozilla.javascript.ast.XmlRef",
      "org.mozilla.javascript.ast.XmlPropRef",
      "org.mozilla.javascript.ast.TryStatement",
      "org.mozilla.javascript.ast.ArrayLiteral",
      "org.mozilla.javascript.ast.VariableInitializer",
      "org.mozilla.javascript.ast.EmptyStatement",
      "org.mozilla.javascript.ast.EmptyExpression",
      "org.mozilla.javascript.ast.ErrorNode",
      "org.mozilla.javascript.ast.FunctionNode",
      "org.mozilla.javascript.ast.FunctionNode$Form",
      "org.mozilla.javascript.ast.XmlDotQuery",
      "org.mozilla.javascript.ast.XmlElemRef",
      "org.mozilla.javascript.ast.PropertyGet",
      "org.mozilla.javascript.ast.ThrowStatement",
      "org.mozilla.javascript.ast.LetNode",
      "org.mozilla.javascript.ast.AstNode$DebugPrintVisitor",
      "org.mozilla.javascript.ast.GeneratorExpression",
      "org.mozilla.javascript.ast.ConditionalExpression",
      "org.mozilla.javascript.ast.ElementGet",
      "org.mozilla.javascript.ast.VariableDeclaration",
      "org.mozilla.javascript.ast.ParenthesizedExpression",
      "org.mozilla.javascript.ast.BreakStatement",
      "org.mozilla.javascript.ast.ForLoop",
      "org.mozilla.javascript.ast.SwitchCase",
      "org.mozilla.javascript.ast.IfStatement",
      "org.mozilla.javascript.ast.Yield",
      "org.mozilla.javascript.ast.SwitchStatement",
      "org.mozilla.javascript.ast.Block",
      "org.mozilla.javascript.ast.Symbol",
      "org.mozilla.javascript.ast.ArrayComprehensionLoop",
      "org.mozilla.javascript.ast.XmlFragment",
      "org.mozilla.javascript.ast.XmlExpression",
      "org.mozilla.javascript.ast.XmlMemberGet",
      "org.mozilla.javascript.ast.FunctionCall",
      "org.mozilla.javascript.ast.WhileLoop",
      "org.mozilla.javascript.ast.XmlString",
      "org.mozilla.javascript.ast.Label",
      "org.mozilla.javascript.ast.NewExpression",
      "org.mozilla.javascript.ast.ReturnStatement",
      "org.mozilla.javascript.ast.RegExpLiteral",
      "org.mozilla.javascript.ast.ObjectLiteral",
      "org.mozilla.javascript.ast.XmlLiteral",
      "org.mozilla.javascript.ast.DoLoop",
      "org.mozilla.javascript.ast.ObjectProperty",
      "org.mozilla.javascript.ast.CatchClause",
      "org.mozilla.javascript.ast.AstRoot$1",
      "org.mozilla.javascript.ast.LabeledStatement",
      "org.mozilla.javascript.ast.StringLiteral",
      "org.mozilla.javascript.optimizer.Codegen",
      "org.mozilla.javascript.Icode",
      "org.mozilla.javascript.Interpreter",
      "org.mozilla.javascript.Context",
      "org.mozilla.javascript.ContextFactory",
      "org.mozilla.javascript.ScriptableObject$KeyComparator",
      "org.mozilla.javascript.ScriptableObject",
      "org.mozilla.javascript.ScriptRuntime$DefaultMessageProvider",
      "org.mozilla.javascript.ScriptRuntime"
    );
  }
}
