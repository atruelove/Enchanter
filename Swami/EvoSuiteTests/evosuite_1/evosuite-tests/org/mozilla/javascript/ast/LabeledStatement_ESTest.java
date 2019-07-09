/*
 * This file was automatically generated by EvoSuite
 * Tue Jul 31 17:27:27 GMT 2018
 */

package org.mozilla.javascript.ast;

import org.junit.Test;
import static org.junit.Assert.*;
import static org.evosuite.runtime.EvoAssertions.*;
import java.util.LinkedList;
import org.evosuite.runtime.EvoRunner;
import org.evosuite.runtime.EvoRunnerParameters;
import org.junit.runner.RunWith;
import org.mozilla.javascript.ast.AstNode;
import org.mozilla.javascript.ast.Label;
import org.mozilla.javascript.ast.LabeledStatement;

@RunWith(EvoRunner.class) @EvoRunnerParameters(mockJVMNonDeterminism = true, useVFS = true, useVNET = true, resetStaticState = true, separateClassLoader = false, useJEE = true) 
public class LabeledStatement_ESTest extends LabeledStatement_ESTest_scaffolding {

  @Test(timeout = 4000)
  public void test00()  throws Throwable  {
      LabeledStatement labeledStatement0 = new LabeledStatement(134, (-2152));
      Label label0 = new Label(5);
      labeledStatement0.setStatement(label0);
      StringBuilder stringBuilder0 = new StringBuilder("                                                                                                                                                                                                          null:\n");
      AstNode.DebugPrintVisitor astNode_DebugPrintVisitor0 = new AstNode.DebugPrintVisitor(stringBuilder0);
      labeledStatement0.visit(astNode_DebugPrintVisitor0);
      assertEquals("                                                                                                                                                                                                          null:\n134\tEXPR_VOID 134 -2152\n5\t  LABEL -129 -1\n", astNode_DebugPrintVisitor0.toString());
      assertEquals(134, labeledStatement0.getType());
  }

  @Test(timeout = 4000)
  public void test01()  throws Throwable  {
      LabeledStatement labeledStatement0 = new LabeledStatement();
      Label label0 = new Label(1151, 0, "6");
      labeledStatement0.addLabel(label0);
      StringBuilder stringBuilder0 = new StringBuilder((CharSequence) "6");
      AstNode.DebugPrintVisitor astNode_DebugPrintVisitor0 = new AstNode.DebugPrintVisitor(stringBuilder0);
      // Undeclared exception!
      try { 
        labeledStatement0.visit(astNode_DebugPrintVisitor0);
        fail("Expecting exception: NullPointerException");
      
      } catch(NullPointerException e) {
         //
         // no message in exception (getMessage() returned null)
         //
         verifyException("org.mozilla.javascript.ast.LabeledStatement", e);
      }
  }

  @Test(timeout = 4000)
  public void test02()  throws Throwable  {
      LabeledStatement labeledStatement0 = new LabeledStatement();
      Label label0 = new Label();
      labeledStatement0.addLabel(label0);
      // Undeclared exception!
      try { 
        labeledStatement0.toSource(2);
        fail("Expecting exception: NullPointerException");
      
      } catch(NullPointerException e) {
         //
         // no message in exception (getMessage() returned null)
         //
         verifyException("org.mozilla.javascript.ast.LabeledStatement", e);
      }
  }

  @Test(timeout = 4000)
  public void test03()  throws Throwable  {
      LabeledStatement labeledStatement0 = new LabeledStatement();
      LinkedList<Label> linkedList0 = new LinkedList<Label>();
      Label label0 = new Label();
      linkedList0.add(label0);
      labeledStatement0.setLabels(linkedList0);
      assertEquals("134", labeledStatement0.toString());
  }

  @Test(timeout = 4000)
  public void test04()  throws Throwable  {
      LabeledStatement labeledStatement0 = new LabeledStatement(0);
      LinkedList<Label> linkedList0 = new LinkedList<Label>();
      linkedList0.add((Label) null);
      // Undeclared exception!
      try { 
        labeledStatement0.setLabels(linkedList0);
        fail("Expecting exception: IllegalArgumentException");
      
      } catch(IllegalArgumentException e) {
         //
         // arg cannot be null
         //
         verifyException("org.mozilla.javascript.ast.AstNode", e);
      }
  }

  @Test(timeout = 4000)
  public void test05()  throws Throwable  {
      LabeledStatement labeledStatement0 = new LabeledStatement();
      boolean boolean0 = labeledStatement0.hasSideEffects();
      assertEquals(134, labeledStatement0.getType());
      assertTrue(boolean0);
  }

  @Test(timeout = 4000)
  public void test06()  throws Throwable  {
      LabeledStatement labeledStatement0 = new LabeledStatement();
      labeledStatement0.getStatement();
      assertEquals("134", labeledStatement0.toString());
  }

  @Test(timeout = 4000)
  public void test07()  throws Throwable  {
      LabeledStatement labeledStatement0 = new LabeledStatement();
      labeledStatement0.getLabels();
      assertEquals("134", labeledStatement0.toString());
  }

  @Test(timeout = 4000)
  public void test08()  throws Throwable  {
      LabeledStatement labeledStatement0 = new LabeledStatement();
      Label label0 = new Label();
      labeledStatement0.addLabel(label0);
      Label label1 = labeledStatement0.getLabelByName("LabeledStatement");
      assertNull(label1);
      assertEquals("134", labeledStatement0.toString());
  }

  @Test(timeout = 4000)
  public void test09()  throws Throwable  {
      LabeledStatement labeledStatement0 = new LabeledStatement(0);
      // Undeclared exception!
      try { 
        labeledStatement0.getFirstLabel();
        fail("Expecting exception: IndexOutOfBoundsException");
      
      } catch(IndexOutOfBoundsException e) {
         //
         // Index: 0, Size: 0
         //
         verifyException("java.util.ArrayList", e);
      }
  }

  @Test(timeout = 4000)
  public void test10()  throws Throwable  {
      LabeledStatement labeledStatement0 = new LabeledStatement(134, (-2152));
      Label label0 = new Label(5);
      labeledStatement0.setStatement(label0);
      String string0 = labeledStatement0.toSource(100);
      assertEquals("                                                                                                                                                                                                          null:\n", string0);
      assertEquals("134", labeledStatement0.toString());
  }

  @Test(timeout = 4000)
  public void test11()  throws Throwable  {
      LabeledStatement labeledStatement0 = new LabeledStatement();
      Label label0 = new Label(1151, 0, "6");
      labeledStatement0.addLabel(label0);
      Label label1 = labeledStatement0.getLabelByName("6");
      assertNotNull(label1);
      assertEquals("134", labeledStatement0.toString());
  }
}
