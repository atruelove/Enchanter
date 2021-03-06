/*
 * This file was automatically generated by EvoSuite
 * Wed Aug 01 07:07:11 GMT 2018
 */

package org.mozilla.javascript.optimizer;

import org.junit.Test;
import static org.junit.Assert.*;
import static org.evosuite.runtime.EvoAssertions.*;
import org.evosuite.runtime.EvoRunner;
import org.evosuite.runtime.EvoRunnerParameters;
import org.junit.runner.RunWith;
import org.mozilla.javascript.Node;
import org.mozilla.javascript.ast.ArrayComprehensionLoop;
import org.mozilla.javascript.ast.AstRoot;
import org.mozilla.javascript.ast.FunctionNode;
import org.mozilla.javascript.ast.LabeledStatement;
import org.mozilla.javascript.ast.RegExpLiteral;
import org.mozilla.javascript.ast.TryStatement;
import org.mozilla.javascript.ast.XmlLiteral;
import org.mozilla.javascript.optimizer.Block;
import org.mozilla.javascript.optimizer.OptFunctionNode;

@RunWith(EvoRunner.class) @EvoRunnerParameters(mockJVMNonDeterminism = true, useVFS = true, useVNET = true, resetStaticState = true, separateClassLoader = true, useJEE = true) 
public class Block_ESTest extends Block_ESTest_scaffolding {

  @Test(timeout = 4000)
  public void test0()  throws Throwable  {
      FunctionNode functionNode0 = new FunctionNode((-1));
      OptFunctionNode optFunctionNode0 = new OptFunctionNode(functionNode0);
      functionNode0.flattenSymbolTable(true);
      LabeledStatement labeledStatement0 = new LabeledStatement(12, 12);
      RegExpLiteral regExpLiteral0 = new RegExpLiteral(23, 1);
      Node[] nodeArray0 = new Node[7];
      nodeArray0[0] = (Node) regExpLiteral0;
      nodeArray0[1] = (Node) labeledStatement0;
      nodeArray0[2] = (Node) functionNode0;
      nodeArray0[3] = (Node) labeledStatement0;
      labeledStatement0.setType(108);
      TryStatement tryStatement0 = new TryStatement(8);
      nodeArray0[4] = (Node) tryStatement0;
      XmlLiteral xmlLiteral0 = new XmlLiteral(16, 5);
      nodeArray0[5] = (Node) xmlLiteral0;
      nodeArray0[6] = (Node) labeledStatement0;
      // Undeclared exception!
      try { 
        Block.runFlowAnalyzes(optFunctionNode0, nodeArray0);
        fail("Expecting exception: NullPointerException");
      
      } catch(NullPointerException e) {
         //
         // no message in exception (getMessage() returned null)
         //
         verifyException("org.mozilla.javascript.optimizer.Block", e);
      }
  }

  @Test(timeout = 4000)
  public void test1()  throws Throwable  {
      FunctionNode functionNode0 = new FunctionNode();
      OptFunctionNode optFunctionNode0 = new OptFunctionNode(functionNode0);
      ArrayComprehensionLoop arrayComprehensionLoop0 = new ArrayComprehensionLoop();
      functionNode0.flattenSymbolTable(true);
      arrayComprehensionLoop0.addChildrenToFront(functionNode0);
      AstRoot astRoot0 = new AstRoot(1);
      Node[] nodeArray0 = new Node[6];
      nodeArray0[0] = (Node) arrayComprehensionLoop0;
      nodeArray0[1] = (Node) arrayComprehensionLoop0;
      nodeArray0[2] = (Node) astRoot0;
      nodeArray0[3] = (Node) functionNode0;
      nodeArray0[4] = (Node) astRoot0;
      nodeArray0[5] = (Node) arrayComprehensionLoop0;
      Block.runFlowAnalyzes(optFunctionNode0, nodeArray0);
      assertEquals((-1), optFunctionNode0.getDirectTargetIndex());
  }

  @Test(timeout = 4000)
  public void test2()  throws Throwable  {
      FunctionNode functionNode0 = new FunctionNode((-1));
      OptFunctionNode optFunctionNode0 = new OptFunctionNode(functionNode0);
      functionNode0.flattenSymbolTable(true);
      LabeledStatement labeledStatement0 = new LabeledStatement(12, 12);
      RegExpLiteral regExpLiteral0 = new RegExpLiteral();
      functionNode0.setType(5);
      Node[] nodeArray0 = new Node[7];
      nodeArray0[0] = (Node) regExpLiteral0;
      nodeArray0[1] = (Node) regExpLiteral0;
      nodeArray0[2] = (Node) functionNode0;
      nodeArray0[3] = (Node) labeledStatement0;
      TryStatement tryStatement0 = new TryStatement(18, 2);
      nodeArray0[4] = (Node) tryStatement0;
      XmlLiteral xmlLiteral0 = new XmlLiteral(78, 5);
      nodeArray0[5] = (Node) xmlLiteral0;
      nodeArray0[6] = (Node) labeledStatement0;
      // Undeclared exception!
      try { 
        Block.runFlowAnalyzes(optFunctionNode0, nodeArray0);
        fail("Expecting exception: NullPointerException");
      
      } catch(NullPointerException e) {
         //
         // no message in exception (getMessage() returned null)
         //
         verifyException("org.mozilla.javascript.optimizer.Block", e);
      }
  }

  @Test(timeout = 4000)
  public void test3()  throws Throwable  {
      FunctionNode functionNode0 = new FunctionNode((-1));
      OptFunctionNode optFunctionNode0 = new OptFunctionNode(functionNode0);
      functionNode0.flattenSymbolTable(true);
      LabeledStatement labeledStatement0 = new LabeledStatement(12, 12);
      RegExpLiteral regExpLiteral0 = new RegExpLiteral(23, 1);
      Node node0 = Node.newTarget();
      Node[] nodeArray0 = new Node[7];
      nodeArray0[0] = (Node) regExpLiteral0;
      nodeArray0[1] = node0;
      nodeArray0[2] = (Node) functionNode0;
      nodeArray0[3] = (Node) labeledStatement0;
      TryStatement tryStatement0 = new TryStatement(8);
      nodeArray0[4] = (Node) tryStatement0;
      XmlLiteral xmlLiteral0 = new XmlLiteral(21, 5);
      nodeArray0[5] = (Node) xmlLiteral0;
      nodeArray0[6] = (Node) labeledStatement0;
      Block.runFlowAnalyzes(optFunctionNode0, nodeArray0);
      assertEquals((-1), optFunctionNode0.getDirectTargetIndex());
  }

  @Test(timeout = 4000)
  public void test4()  throws Throwable  {
      FunctionNode functionNode0 = new FunctionNode((-1));
      OptFunctionNode optFunctionNode0 = new OptFunctionNode(functionNode0);
      functionNode0.flattenSymbolTable(true);
      RegExpLiteral regExpLiteral0 = new RegExpLiteral();
      Node node0 = Node.newTarget();
      functionNode0.setType(5);
      Node[] nodeArray0 = new Node[7];
      nodeArray0[0] = (Node) regExpLiteral0;
      nodeArray0[1] = node0;
      nodeArray0[2] = (Node) functionNode0;
      // Undeclared exception!
      try { 
        Block.runFlowAnalyzes(optFunctionNode0, nodeArray0);
        fail("Expecting exception: NullPointerException");
      
      } catch(NullPointerException e) {
         //
         // no message in exception (getMessage() returned null)
         //
         verifyException("org.mozilla.javascript.optimizer.Block", e);
      }
  }
}
