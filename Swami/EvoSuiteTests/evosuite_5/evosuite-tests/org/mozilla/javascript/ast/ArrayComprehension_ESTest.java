/*
 * This file was automatically generated by EvoSuite
 * Thu Aug 02 16:50:56 GMT 2018
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
import org.mozilla.javascript.ast.XmlLiteral;

@RunWith(EvoRunner.class) @EvoRunnerParameters(mockJVMNonDeterminism = true, useVFS = true, useVNET = true, resetStaticState = true, separateClassLoader = true, useJEE = true) 
public class ArrayComprehension_ESTest extends ArrayComprehension_ESTest_scaffolding {

  @Test(timeout = 4000)
  public void test00()  throws Throwable  {
      ArrayComprehension arrayComprehension0 = new ArrayComprehension();
      XmlLiteral xmlLiteral0 = new XmlLiteral(11, 4);
      arrayComprehension0.setResult(xmlLiteral0);
      StringBuilder stringBuilder0 = new StringBuilder("[]");
      arrayComprehension0.setFilter(xmlLiteral0);
      AstNode.DebugPrintVisitor astNode_DebugPrintVisitor0 = new AstNode.DebugPrintVisitor(stringBuilder0);
      arrayComprehension0.visit(astNode_DebugPrintVisitor0);
      assertEquals("[]-1\tARRAYCOMP -1 1\n11\t  XML 12 4\n11\t  XML 12 4\n", astNode_DebugPrintVisitor0.toString());
      assertEquals((-1), arrayComprehension0.getFilterRp());
  }

  @Test(timeout = 4000)
  public void test01()  throws Throwable  {
      ArrayComprehension arrayComprehension0 = new ArrayComprehension();
      XmlLiteral xmlLiteral0 = new XmlLiteral(11, 4);
      arrayComprehension0.setResult(xmlLiteral0);
      StringBuilder stringBuilder0 = new StringBuilder(23);
      AstNode.DebugPrintVisitor astNode_DebugPrintVisitor0 = new AstNode.DebugPrintVisitor(stringBuilder0);
      ArrayComprehensionLoop arrayComprehensionLoop0 = new ArrayComprehensionLoop(158, 89);
      arrayComprehension0.addLoop(arrayComprehensionLoop0);
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
  public void test02()  throws Throwable  {
      ArrayComprehension arrayComprehension0 = new ArrayComprehension();
      XmlLiteral xmlLiteral0 = new XmlLiteral(18, 15);
      arrayComprehension0.setResult(xmlLiteral0);
      arrayComprehension0.setFilter(xmlLiteral0);
      String string0 = arrayComprehension0.toSource(4);
      assertEquals((-1), arrayComprehension0.getFilterRp());
      assertEquals((-1), arrayComprehension0.getIfPosition());
      assertEquals("158", arrayComprehension0.toString());
      assertEquals((-1), arrayComprehension0.getFilterLp());
      assertEquals("[ if ()]", string0);
  }

  @Test(timeout = 4000)
  public void test03()  throws Throwable  {
      ArrayComprehension arrayComprehension0 = new ArrayComprehension();
      XmlLiteral xmlLiteral0 = new XmlLiteral(18);
      arrayComprehension0.setResult(xmlLiteral0);
      ArrayComprehensionLoop arrayComprehensionLoop0 = new ArrayComprehensionLoop(1);
      arrayComprehension0.addLoop(arrayComprehensionLoop0);
      // Undeclared exception!
      try { 
        arrayComprehension0.toSource(26);
        fail("Expecting exception: NullPointerException");
      
      } catch(NullPointerException e) {
         //
         // no message in exception (getMessage() returned null)
         //
         verifyException("org.mozilla.javascript.ast.ArrayComprehensionLoop", e);
      }
  }

  @Test(timeout = 4000)
  public void test04()  throws Throwable  {
      ArrayComprehension arrayComprehension0 = new ArrayComprehension(0);
      arrayComprehension0.setIfPosition(127);
      assertEquals(127, arrayComprehension0.getIfPosition());
  }

  @Test(timeout = 4000)
  public void test05()  throws Throwable  {
      ArrayComprehension arrayComprehension0 = new ArrayComprehension(0, 0);
      assertEquals((-1), arrayComprehension0.getFilterRp());
      
      arrayComprehension0.setFilterRp(0);
      assertEquals(0, arrayComprehension0.getFilterRp());
  }

  @Test(timeout = 4000)
  public void test06()  throws Throwable  {
      ArrayComprehension arrayComprehension0 = new ArrayComprehension(4408);
      arrayComprehension0.setFilterLp(3164);
      assertEquals(3164, arrayComprehension0.getFilterLp());
  }

  @Test(timeout = 4000)
  public void test07()  throws Throwable  {
      ArrayComprehension arrayComprehension0 = new ArrayComprehension(4408);
      arrayComprehension0.getResult();
      assertEquals((-1), arrayComprehension0.getFilterRp());
      assertEquals((-1), arrayComprehension0.getIfPosition());
      assertEquals("158", arrayComprehension0.toString());
      assertEquals((-1), arrayComprehension0.getFilterLp());
  }

  @Test(timeout = 4000)
  public void test08()  throws Throwable  {
      ArrayComprehension arrayComprehension0 = new ArrayComprehension();
      arrayComprehension0.getLoops();
      assertEquals((-1), arrayComprehension0.getFilterLp());
      assertEquals((-1), arrayComprehension0.getIfPosition());
      assertEquals((-1), arrayComprehension0.getFilterRp());
      assertEquals("158", arrayComprehension0.toString());
  }

  @Test(timeout = 4000)
  public void test09()  throws Throwable  {
      ArrayComprehension arrayComprehension0 = new ArrayComprehension(4408);
      int int0 = arrayComprehension0.getIfPosition();
      assertEquals((-1), arrayComprehension0.getFilterRp());
      assertEquals((-1), int0);
      assertEquals((-1), arrayComprehension0.getFilterLp());
      assertEquals("158", arrayComprehension0.toString());
  }

  @Test(timeout = 4000)
  public void test10()  throws Throwable  {
      ArrayComprehension arrayComprehension0 = new ArrayComprehension();
      int int0 = arrayComprehension0.getFilterRp();
      assertEquals((-1), int0);
      assertEquals((-1), arrayComprehension0.getFilterLp());
      assertEquals((-1), arrayComprehension0.getIfPosition());
      assertEquals("158", arrayComprehension0.toString());
  }

  @Test(timeout = 4000)
  public void test11()  throws Throwable  {
      ArrayComprehension arrayComprehension0 = new ArrayComprehension();
      int int0 = arrayComprehension0.getFilterLp();
      assertEquals((-1), int0);
      assertEquals((-1), arrayComprehension0.getIfPosition());
      assertEquals("158", arrayComprehension0.toString());
      assertEquals((-1), arrayComprehension0.getFilterRp());
  }

  @Test(timeout = 4000)
  public void test12()  throws Throwable  {
      ArrayComprehension arrayComprehension0 = new ArrayComprehension(4408);
      arrayComprehension0.getFilter();
      assertEquals((-1), arrayComprehension0.getFilterLp());
      assertEquals(158, arrayComprehension0.getType());
      assertEquals((-1), arrayComprehension0.getFilterRp());
      assertEquals((-1), arrayComprehension0.getIfPosition());
  }

  @Test(timeout = 4000)
  public void test13()  throws Throwable  {
      ArrayComprehension arrayComprehension0 = new ArrayComprehension();
      LinkedList<ArrayComprehensionLoop> linkedList0 = new LinkedList<ArrayComprehensionLoop>();
      ArrayComprehensionLoop arrayComprehensionLoop0 = new ArrayComprehensionLoop();
      linkedList0.add(arrayComprehensionLoop0);
      arrayComprehension0.setLoops(linkedList0);
      assertEquals((-1), arrayComprehension0.getFilterLp());
      assertEquals((-1), arrayComprehension0.getFilterRp());
      assertEquals((-1), arrayComprehension0.getIfPosition());
      assertEquals("158", arrayComprehension0.toString());
  }
}
