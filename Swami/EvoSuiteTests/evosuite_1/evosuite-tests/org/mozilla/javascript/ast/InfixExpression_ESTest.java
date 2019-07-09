/*
 * This file was automatically generated by EvoSuite
 * Tue Jul 31 18:29:21 GMT 2018
 */

package org.mozilla.javascript.ast;

import org.junit.Test;
import static org.junit.Assert.*;
import static org.evosuite.runtime.EvoAssertions.*;
import org.evosuite.runtime.EvoRunner;
import org.evosuite.runtime.EvoRunnerParameters;
import org.junit.runner.RunWith;
import org.mozilla.javascript.ast.Assignment;
import org.mozilla.javascript.ast.AstNode;
import org.mozilla.javascript.ast.EmptyExpression;
import org.mozilla.javascript.ast.InfixExpression;
import org.mozilla.javascript.ast.PropertyGet;
import org.mozilla.javascript.ast.RegExpLiteral;
import org.mozilla.javascript.ast.StringLiteral;
import org.mozilla.javascript.ast.UnaryExpression;
import org.mozilla.javascript.ast.XmlDotQuery;
import org.mozilla.javascript.ast.Yield;

@RunWith(EvoRunner.class) @EvoRunnerParameters(mockJVMNonDeterminism = true, useVFS = true, useVNET = true, resetStaticState = true, separateClassLoader = false, useJEE = true) 
public class InfixExpression_ESTest extends InfixExpression_ESTest_scaffolding {

  @Test(timeout = 4000)
  public void test00()  throws Throwable  {
      RegExpLiteral regExpLiteral0 = new RegExpLiteral();
      InfixExpression infixExpression0 = new InfixExpression(regExpLiteral0, regExpLiteral0);
      StringBuilder stringBuilder0 = new StringBuilder(6);
      AstNode.DebugPrintVisitor astNode_DebugPrintVisitor0 = new AstNode.DebugPrintVisitor(stringBuilder0);
      infixExpression0.visit(astNode_DebugPrintVisitor0);
      assertEquals(0, regExpLiteral0.getPosition());
  }

  @Test(timeout = 4000)
  public void test01()  throws Throwable  {
      EmptyExpression emptyExpression0 = new EmptyExpression((-4), (-4));
      InfixExpression infixExpression0 = new InfixExpression(emptyExpression0, emptyExpression0);
      infixExpression0.setOperator(10);
      String string0 = infixExpression0.toSource((-1903));
      assertEquals(0, emptyExpression0.getPosition());
      assertEquals(" ^ ", string0);
  }

  @Test(timeout = 4000)
  public void test02()  throws Throwable  {
      XmlDotQuery xmlDotQuery0 = new XmlDotQuery();
      StringLiteral stringLiteral0 = new StringLiteral();
      xmlDotQuery0.right = (AstNode) stringLiteral0;
      xmlDotQuery0.setOperator(106);
      boolean boolean0 = xmlDotQuery0.hasSideEffects();
      assertEquals("106", xmlDotQuery0.toString());
      assertFalse(boolean0);
  }

  @Test(timeout = 4000)
  public void test03()  throws Throwable  {
      XmlDotQuery xmlDotQuery0 = new XmlDotQuery();
      xmlDotQuery0.setOperator(90);
      boolean boolean0 = xmlDotQuery0.hasSideEffects();
      assertEquals(90, xmlDotQuery0.getOperator());
      assertFalse(boolean0);
  }

  @Test(timeout = 4000)
  public void test04()  throws Throwable  {
      EmptyExpression emptyExpression0 = new EmptyExpression((-4), (-4));
      InfixExpression infixExpression0 = new InfixExpression(emptyExpression0, emptyExpression0);
      infixExpression0.getRight();
      assertEquals(0, emptyExpression0.getPosition());
      assertEquals((-4), infixExpression0.getLength());
  }

  @Test(timeout = 4000)
  public void test05()  throws Throwable  {
      PropertyGet propertyGet0 = new PropertyGet();
      int int0 = propertyGet0.getOperatorPosition();
      assertEquals((-1), int0);
  }

  @Test(timeout = 4000)
  public void test06()  throws Throwable  {
      Assignment assignment0 = new Assignment();
      assignment0.getOperator();
      assertEquals((-1), assignment0.getOperatorPosition());
  }

  @Test(timeout = 4000)
  public void test07()  throws Throwable  {
      UnaryExpression unaryExpression0 = new UnaryExpression();
      InfixExpression infixExpression0 = new InfixExpression((-2188), unaryExpression0, unaryExpression0, 609);
      assertEquals(0, unaryExpression0.getPosition());
      assertEquals((-2188), infixExpression0.getOperator());
  }

  @Test(timeout = 4000)
  public void test08()  throws Throwable  {
      Yield yield0 = new Yield((-1417), (-1417));
      InfixExpression infixExpression0 = new InfixExpression((-1417), (-1417), yield0, yield0);
      assertEquals((-1), infixExpression0.getOperatorPosition());
  }

  @Test(timeout = 4000)
  public void test09()  throws Throwable  {
      XmlDotQuery xmlDotQuery0 = new XmlDotQuery(164, (-221));
      xmlDotQuery0.getLeft();
      assertEquals((-1), xmlDotQuery0.getOperatorPosition());
  }

  @Test(timeout = 4000)
  public void test10()  throws Throwable  {
      InfixExpression infixExpression0 = new InfixExpression(0);
      assertEquals((-1), infixExpression0.getOperatorPosition());
  }

  @Test(timeout = 4000)
  public void test11()  throws Throwable  {
      XmlDotQuery xmlDotQuery0 = new XmlDotQuery();
      xmlDotQuery0.hasSideEffects();
      assertEquals((-1), xmlDotQuery0.getOperatorPosition());
  }

  @Test(timeout = 4000)
  public void test12()  throws Throwable  {
      RegExpLiteral regExpLiteral0 = new RegExpLiteral();
      InfixExpression infixExpression0 = new InfixExpression(regExpLiteral0, regExpLiteral0);
      // Undeclared exception!
      try { 
        infixExpression0.setOperator((-3350));
        fail("Expecting exception: IllegalArgumentException");
      
      } catch(IllegalArgumentException e) {
         //
         // Invalid token: -3350
         //
         verifyException("org.mozilla.javascript.ast.InfixExpression", e);
      }
  }
}
