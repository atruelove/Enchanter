/*
 * This file was automatically generated by EvoSuite
 * Thu Aug 02 16:03:23 GMT 2018
 */

package org.mozilla.javascript.ast;

import org.junit.Test;
import static org.junit.Assert.*;
import static org.evosuite.runtime.EvoAssertions.*;
import java.util.HashMap;
import java.util.List;
import org.evosuite.runtime.EvoRunner;
import org.evosuite.runtime.EvoRunnerParameters;
import org.junit.runner.RunWith;
import org.mozilla.javascript.Node;
import org.mozilla.javascript.ast.ArrayComprehensionLoop;
import org.mozilla.javascript.ast.AstNode;
import org.mozilla.javascript.ast.DoLoop;
import org.mozilla.javascript.ast.ForInLoop;
import org.mozilla.javascript.ast.FunctionNode;
import org.mozilla.javascript.ast.LetNode;
import org.mozilla.javascript.ast.Name;
import org.mozilla.javascript.ast.RegExpLiteral;
import org.mozilla.javascript.ast.Scope;
import org.mozilla.javascript.ast.ScriptNode;
import org.mozilla.javascript.ast.Symbol;

@RunWith(EvoRunner.class) @EvoRunnerParameters(mockJVMNonDeterminism = true, useVFS = true, useVNET = true, resetStaticState = true, separateClassLoader = true, useJEE = true) 
public class Scope_ESTest extends Scope_ESTest_scaffolding {

  @Test(timeout = 4000)
  public void test00()  throws Throwable  {
      Scope scope0 = new Scope((-3027));
      RegExpLiteral regExpLiteral0 = new RegExpLiteral();
      scope0.addChildToBack(regExpLiteral0);
      StringBuilder stringBuilder0 = new StringBuilder("Symbol (EOF) name=null");
      AstNode.DebugPrintVisitor astNode_DebugPrintVisitor0 = new AstNode.DebugPrintVisitor(stringBuilder0);
      scope0.visit(astNode_DebugPrintVisitor0);
      assertEquals("Symbol (EOF) name=null-3027\tBLOCK -3027 1\n-1\tREGEXP -1 1\n", astNode_DebugPrintVisitor0.toString());
      assertEquals((-3027), scope0.getPosition());
  }

  @Test(timeout = 4000)
  public void test01()  throws Throwable  {
      Scope scope0 = new Scope((-3027));
      RegExpLiteral regExpLiteral0 = new RegExpLiteral();
      scope0.addChildToBack(regExpLiteral0);
      String string0 = scope0.toSource(18);
      assertEquals("                                    {\n                                      /null/                                    }\n", string0);
      assertEquals((-3027), scope0.getAbsolutePosition());
      assertEquals(130, scope0.getType());
  }

  @Test(timeout = 4000)
  public void test02()  throws Throwable  {
      LetNode letNode0 = new LetNode((-1911), (-809));
      DoLoop doLoop0 = new DoLoop(6, 2);
      letNode0.setParentScope(doLoop0);
      Scope.splitScope(letNode0);
      assertEquals(1, letNode0.depth());
      assertEquals((-809), letNode0.getLength());
  }

  @Test(timeout = 4000)
  public void test03()  throws Throwable  {
      Scope scope0 = new Scope((-1), (-643));
      scope0.setTop((ScriptNode) null);
      assertEquals((-643), scope0.getLength());
      assertEquals((-1), scope0.getPosition());
      assertEquals("130", scope0.toString());
  }

  @Test(timeout = 4000)
  public void test04()  throws Throwable  {
      Name name0 = new Name((-3383), (-3383), "+I_S!PjPk(");
      FunctionNode functionNode0 = new FunctionNode((-3383), name0);
      Symbol symbol0 = new Symbol();
      symbol0.setName("+I_S!PjPk(");
      functionNode0.putSymbol(symbol0);
      assertEquals(0, name0.getPosition());
  }

  @Test(timeout = 4000)
  public void test05()  throws Throwable  {
      Name name0 = new Name((-3383), (-3383), "+I_S!PjPk(");
      FunctionNode functionNode0 = new FunctionNode((-3383), name0);
      Symbol symbol0 = new Symbol();
      // Undeclared exception!
      try { 
        functionNode0.putSymbol(symbol0);
        fail("Expecting exception: IllegalArgumentException");
      
      } catch(IllegalArgumentException e) {
         //
         // null symbol name
         //
         verifyException("org.mozilla.javascript.ast.Scope", e);
      }
  }

  @Test(timeout = 4000)
  public void test06()  throws Throwable  {
      ForInLoop forInLoop0 = new ForInLoop();
      ScriptNode scriptNode0 = forInLoop0.getTop();
      assertNull(scriptNode0);
  }

  @Test(timeout = 4000)
  public void test07()  throws Throwable  {
      LetNode letNode0 = new LetNode();
      Symbol symbol0 = letNode0.getSymbol("");
      assertNull(symbol0);
  }

  @Test(timeout = 4000)
  public void test08()  throws Throwable  {
      Scope scope0 = new Scope((-3027));
      RegExpLiteral regExpLiteral0 = new RegExpLiteral();
      scope0.addChildToBack(regExpLiteral0);
      List<AstNode> list0 = scope0.getStatements();
      assertEquals((-3027), scope0.getAbsolutePosition());
      assertEquals("130", scope0.toString());
      assertFalse(list0.isEmpty());
  }

  @Test(timeout = 4000)
  public void test09()  throws Throwable  {
      LetNode letNode0 = new LetNode();
      HashMap<String, Symbol> hashMap0 = new HashMap<String, Symbol>();
      hashMap0.put("", (Symbol) null);
      letNode0.setSymbolTable(hashMap0);
      Scope scope0 = letNode0.getDefiningScope("");
      assertEquals(159, scope0.getType());
  }

  @Test(timeout = 4000)
  public void test10()  throws Throwable  {
      LetNode letNode0 = new LetNode();
      Scope scope0 = letNode0.getDefiningScope("");
      assertNull(scope0);
  }

  @Test(timeout = 4000)
  public void test11()  throws Throwable  {
      ForInLoop forInLoop0 = new ForInLoop(1);
      forInLoop0.getChildScopes();
      assertEquals(1, forInLoop0.getPosition());
  }

  @Test(timeout = 4000)
  public void test12()  throws Throwable  {
      Scope scope0 = new Scope((-3027));
      HashMap<String, Symbol> hashMap0 = new HashMap<String, Symbol>();
      Symbol symbol0 = new Symbol();
      hashMap0.put("4`3l4Yx", symbol0);
      scope0.setSymbolTable(hashMap0);
      Scope scope1 = new Scope(2812, 0);
      scope0.replaceWith(scope1);
      assertEquals(0, scope1.getLength());
      assertEquals(130, scope1.getType());
      assertEquals(2812, scope1.getPosition());
      assertEquals((-3027), scope0.getAbsolutePosition());
  }

  @Test(timeout = 4000)
  public void test13()  throws Throwable  {
      Scope scope0 = new Scope((-3027));
      HashMap<String, Symbol> hashMap0 = new HashMap<String, Symbol>();
      Symbol symbol0 = new Symbol();
      hashMap0.put("4`3l4Yx", symbol0);
      scope0.setSymbolTable(hashMap0);
      // Undeclared exception!
      try { 
        scope0.replaceWith(scope0);
        fail("Expecting exception: IllegalStateException");
      
      } catch(IllegalStateException e) {
         //
         // FAILED ASSERTION
         //
         verifyException("org.mozilla.javascript.Kit", e);
      }
  }

  @Test(timeout = 4000)
  public void test14()  throws Throwable  {
      Scope scope0 = new Scope(5, 511);
      scope0.clearParentScope();
      assertEquals(511, scope0.getLength());
      assertEquals(5, scope0.getPosition());
      assertEquals(130, scope0.getType());
  }

  @Test(timeout = 4000)
  public void test15()  throws Throwable  {
      LetNode letNode0 = new LetNode();
      ArrayComprehensionLoop arrayComprehensionLoop0 = new ArrayComprehensionLoop();
      letNode0.addChildScope(arrayComprehensionLoop0);
      letNode0.replaceWith(arrayComprehensionLoop0);
      assertEquals(23, Node.DESTRUCTURING_PARAMS);
  }
}
