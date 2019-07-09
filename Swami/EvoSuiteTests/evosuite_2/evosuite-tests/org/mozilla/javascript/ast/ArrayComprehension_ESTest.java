/*
 * This file was automatically generated by EvoSuite
 * Tue Jul 31 18:38:59 GMT 2018
 */

package org.mozilla.javascript.ast;

import org.junit.Test;
import static org.junit.Assert.*;
import static org.evosuite.runtime.EvoAssertions.*;
import java.util.LinkedList;
import org.evosuite.runtime.EvoRunner;
import org.evosuite.runtime.EvoRunnerParameters;
import org.junit.runner.RunWith;
import org.mozilla.javascript.ast.ArrayComprehension;
import org.mozilla.javascript.ast.ArrayComprehensionLoop;
import org.mozilla.javascript.ast.AstNode;
import org.mozilla.javascript.ast.ContinueStatement;
import org.mozilla.javascript.ast.Yield;

@RunWith(EvoRunner.class) @EvoRunnerParameters(mockJVMNonDeterminism = true, useVFS = true, useVNET = true, resetStaticState = true, separateClassLoader = true, useJEE = true) 
public class ArrayComprehension_ESTest extends ArrayComprehension_ESTest_scaffolding {

  @Test(timeout = 4000)
  public void test00()  throws Throwable  {
      ArrayComprehension arrayComprehension0 = new ArrayComprehension();
      Yield yield0 = new Yield(1, 6);
      arrayComprehension0.setFilter(yield0);
      arrayComprehension0.setResult(yield0);
      StringBuilder stringBuilder0 = new StringBuilder(7);
      AstNode.DebugPrintVisitor astNode_DebugPrintVisitor0 = new AstNode.DebugPrintVisitor(stringBuilder0);
      arrayComprehension0.visit(astNode_DebugPrintVisitor0);
      assertEquals("-1\tARRAYCOMP -1 1\n1\t  YIELD 2 6\n1\t  YIELD 2 6\n", astNode_DebugPrintVisitor0.toString());
      assertEquals((-1), arrayComprehension0.getFilterLp());
  }

  @Test(timeout = 4000)
  public void test01()  throws Throwable  {
      ArrayComprehension arrayComprehension0 = new ArrayComprehension();
      ContinueStatement continueStatement0 = new ContinueStatement(1);
      arrayComprehension0.setResult(continueStatement0);
      String string0 = arrayComprehension0.toSource();
      assertEquals((-1), arrayComprehension0.getFilterLp());
      assertEquals((-1), arrayComprehension0.getFilterRp());
      assertEquals("158", arrayComprehension0.toString());
      assertEquals("[continue;\n]", string0);
      assertEquals((-1), arrayComprehension0.getIfPosition());
  }

  @Test(timeout = 4000)
  public void test02()  throws Throwable  {
      ArrayComprehension arrayComprehension0 = new ArrayComprehension();
      LinkedList<ArrayComprehensionLoop> linkedList0 = new LinkedList<ArrayComprehensionLoop>();
      ArrayComprehensionLoop arrayComprehensionLoop0 = new ArrayComprehensionLoop(15);
      linkedList0.add(arrayComprehensionLoop0);
      arrayComprehension0.setLoops(linkedList0);
      ContinueStatement continueStatement0 = new ContinueStatement(27);
      arrayComprehension0.setResult(continueStatement0);
      StringBuilder stringBuilder0 = new StringBuilder();
      AstNode.DebugPrintVisitor astNode_DebugPrintVisitor0 = new AstNode.DebugPrintVisitor(stringBuilder0);
      // Undeclared exception!
      try { 
        arrayComprehension0.visit(astNode_DebugPrintVisitor0);
        fail("Expecting exception: NullPointerException");
      
      } catch(NullPointerException e) {
         //
         // no message in exception (getMessage() returned null)
         //
         verifyException("org.mozilla.javascript.ast.ArrayComprehensionLoop", e);
      }
  }

  @Test(timeout = 4000)
  public void test03()  throws Throwable  {
      ArrayComprehension arrayComprehension0 = new ArrayComprehension((-3100));
      arrayComprehension0.setIfPosition(1260);
      assertEquals(1260, arrayComprehension0.getIfPosition());
  }

  @Test(timeout = 4000)
  public void test04()  throws Throwable  {
      ArrayComprehension arrayComprehension0 = new ArrayComprehension();
      arrayComprehension0.setFilterRp(401);
      assertEquals(401, arrayComprehension0.getFilterRp());
  }

  @Test(timeout = 4000)
  public void test05()  throws Throwable  {
      ArrayComprehension arrayComprehension0 = new ArrayComprehension();
      Yield yield0 = new Yield(1, 6);
      arrayComprehension0.setFilter(yield0);
      assertEquals(1, yield0.depth());
      
      arrayComprehension0.setResult(yield0);
      String string0 = arrayComprehension0.toSource();
      assertEquals("[yield if (yield)]", string0);
  }

  @Test(timeout = 4000)
  public void test06()  throws Throwable  {
      ArrayComprehension arrayComprehension0 = new ArrayComprehension();
      arrayComprehension0.getResult();
      assertEquals((-1), arrayComprehension0.getFilterLp());
      assertEquals((-1), arrayComprehension0.getIfPosition());
      assertEquals(158, arrayComprehension0.getType());
      assertEquals((-1), arrayComprehension0.getFilterRp());
  }

  @Test(timeout = 4000)
  public void test07()  throws Throwable  {
      ArrayComprehension arrayComprehension0 = new ArrayComprehension();
      arrayComprehension0.getLoops();
      assertEquals((-1), arrayComprehension0.getFilterLp());
      assertEquals((-1), arrayComprehension0.getIfPosition());
      assertEquals((-1), arrayComprehension0.getFilterRp());
      assertEquals("158", arrayComprehension0.toString());
  }

  @Test(timeout = 4000)
  public void test08()  throws Throwable  {
      ArrayComprehension arrayComprehension0 = new ArrayComprehension();
      int int0 = arrayComprehension0.getIfPosition();
      assertEquals((-1), int0);
      assertEquals((-1), arrayComprehension0.getFilterLp());
      assertEquals(158, arrayComprehension0.getType());
      assertEquals((-1), arrayComprehension0.getFilterRp());
  }

  @Test(timeout = 4000)
  public void test09()  throws Throwable  {
      ArrayComprehension arrayComprehension0 = new ArrayComprehension(0);
      int int0 = arrayComprehension0.getFilterRp();
      assertEquals((-1), arrayComprehension0.getIfPosition());
      assertEquals(158, arrayComprehension0.getType());
      assertEquals((-1), int0);
      assertEquals((-1), arrayComprehension0.getFilterLp());
  }

  @Test(timeout = 4000)
  public void test10()  throws Throwable  {
      ArrayComprehension arrayComprehension0 = new ArrayComprehension();
      int int0 = arrayComprehension0.getFilterLp();
      assertEquals((-1), arrayComprehension0.getIfPosition());
      assertEquals((-1), arrayComprehension0.getFilterRp());
      assertEquals("158", arrayComprehension0.toString());
      assertEquals((-1), int0);
  }

  @Test(timeout = 4000)
  public void test11()  throws Throwable  {
      ArrayComprehension arrayComprehension0 = new ArrayComprehension();
      arrayComprehension0.getFilter();
      assertEquals((-1), arrayComprehension0.getFilterRp());
      assertEquals("158", arrayComprehension0.toString());
      assertEquals((-1), arrayComprehension0.getIfPosition());
      assertEquals((-1), arrayComprehension0.getFilterLp());
  }

  @Test(timeout = 4000)
  public void test12()  throws Throwable  {
      ArrayComprehension arrayComprehension0 = new ArrayComprehension((-57), (-161));
      assertEquals((-1), arrayComprehension0.getFilterRp());
      assertEquals((-1), arrayComprehension0.getIfPosition());
      assertEquals("158", arrayComprehension0.toString());
      assertEquals((-1), arrayComprehension0.getFilterLp());
  }

  @Test(timeout = 4000)
  public void test13()  throws Throwable  {
      ArrayComprehension arrayComprehension0 = new ArrayComprehension(1362);
      arrayComprehension0.setFilterLp(1362);
      assertEquals(1362, arrayComprehension0.getFilterLp());
  }

  @Test(timeout = 4000)
  public void test14()  throws Throwable  {
      ArrayComprehension arrayComprehension0 = new ArrayComprehension();
      ArrayComprehensionLoop arrayComprehensionLoop0 = new ArrayComprehensionLoop();
      arrayComprehension0.addLoop(arrayComprehensionLoop0);
      ContinueStatement continueStatement0 = new ContinueStatement(1);
      arrayComprehension0.setResult(continueStatement0);
      // Undeclared exception!
      try { 
        arrayComprehension0.toSource();
        fail("Expecting exception: NullPointerException");
      
      } catch(NullPointerException e) {
         //
         // no message in exception (getMessage() returned null)
         //
         verifyException("org.mozilla.javascript.ast.ArrayComprehensionLoop", e);
      }
  }
}
