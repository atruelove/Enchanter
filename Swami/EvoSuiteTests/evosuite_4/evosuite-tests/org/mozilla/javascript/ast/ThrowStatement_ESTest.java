/*
 * This file was automatically generated by EvoSuite
 * Wed Aug 01 16:56:59 GMT 2018
 */

package org.mozilla.javascript.ast;

import org.junit.Test;
import static org.junit.Assert.*;
import static org.evosuite.runtime.EvoAssertions.*;
import org.evosuite.runtime.EvoRunner;
import org.evosuite.runtime.EvoRunnerParameters;
import org.junit.runner.RunWith;
import org.mozilla.javascript.ast.AstNode;
import org.mozilla.javascript.ast.BreakStatement;
import org.mozilla.javascript.ast.ErrorNode;
import org.mozilla.javascript.ast.ExpressionStatement;
import org.mozilla.javascript.ast.ObjectLiteral;
import org.mozilla.javascript.ast.ThrowStatement;

@RunWith(EvoRunner.class) @EvoRunnerParameters(mockJVMNonDeterminism = true, useVFS = true, useVNET = true, resetStaticState = true, separateClassLoader = true, useJEE = true) 
public class ThrowStatement_ESTest extends ThrowStatement_ESTest_scaffolding {

  @Test(timeout = 4000)
  public void test0()  throws Throwable  {
      ExpressionStatement expressionStatement0 = new ExpressionStatement();
      ThrowStatement throwStatement0 = new ThrowStatement((-246), expressionStatement0);
      AstNode astNode0 = throwStatement0.getExpression();
      assertNotNull(astNode0);
      assertEquals("50", throwStatement0.toString());
  }

  @Test(timeout = 4000)
  public void test1()  throws Throwable  {
      ErrorNode errorNode0 = new ErrorNode(0);
      ThrowStatement throwStatement0 = new ThrowStatement(0, errorNode0);
      StringBuilder stringBuilder0 = new StringBuilder(4);
      AstNode.DebugPrintVisitor astNode_DebugPrintVisitor0 = new AstNode.DebugPrintVisitor(stringBuilder0);
      throwStatement0.visit(astNode_DebugPrintVisitor0);
      assertEquals("0\tTHROW 0 1\n0\t  ERROR 0 1\n", astNode_DebugPrintVisitor0.toString());
      assertEquals(50, throwStatement0.getType());
  }

  @Test(timeout = 4000)
  public void test2()  throws Throwable  {
      ObjectLiteral objectLiteral0 = new ObjectLiteral(0);
      ThrowStatement throwStatement0 = new ThrowStatement(0, 0, objectLiteral0);
      assertEquals(50, throwStatement0.getType());
  }

  @Test(timeout = 4000)
  public void test3()  throws Throwable  {
      ThrowStatement throwStatement0 = new ThrowStatement((-3560), 2419);
      assertEquals("50", throwStatement0.toString());
  }

  @Test(timeout = 4000)
  public void test4()  throws Throwable  {
      ThrowStatement throwStatement0 = new ThrowStatement((-163));
      StringBuilder stringBuilder0 = new StringBuilder();
      AstNode.DebugPrintVisitor astNode_DebugPrintVisitor0 = new AstNode.DebugPrintVisitor(stringBuilder0);
      // Undeclared exception!
      try { 
        throwStatement0.visit(astNode_DebugPrintVisitor0);
        fail("Expecting exception: NullPointerException");
      
      } catch(NullPointerException e) {
         //
         // no message in exception (getMessage() returned null)
         //
         verifyException("org.mozilla.javascript.ast.ThrowStatement", e);
      }
  }

  @Test(timeout = 4000)
  public void test5()  throws Throwable  {
      ThrowStatement throwStatement0 = new ThrowStatement();
      assertEquals("50", throwStatement0.toString());
  }

  @Test(timeout = 4000)
  public void test6()  throws Throwable  {
      BreakStatement breakStatement0 = new BreakStatement(1, 1);
      ThrowStatement throwStatement0 = new ThrowStatement(breakStatement0);
      String string0 = throwStatement0.toSource(23);
      assertEquals(50, throwStatement0.getType());
      assertEquals("                                              throw break;\n;\n", string0);
  }
}
