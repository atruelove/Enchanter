/*
 * This file was automatically generated by EvoSuite
 * Thu Aug 02 17:31:22 GMT 2018
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
import org.mozilla.javascript.ast.DoLoop;
import org.mozilla.javascript.ast.Name;

@RunWith(EvoRunner.class) @EvoRunnerParameters(mockJVMNonDeterminism = true, useVFS = true, useVNET = true, resetStaticState = true, separateClassLoader = true, useJEE = true) 
public class BreakStatement_ESTest extends BreakStatement_ESTest_scaffolding {

  @Test(timeout = 4000)
  public void test0()  throws Throwable  {
      BreakStatement breakStatement0 = new BreakStatement();
      Name name0 = new Name(1);
      breakStatement0.setBreakLabel(name0);
      StringBuilder stringBuilder0 = new StringBuilder((CharSequence) "2/eBtKZB)^mNl<P");
      AstNode.DebugPrintVisitor astNode_DebugPrintVisitor0 = new AstNode.DebugPrintVisitor(stringBuilder0);
      breakStatement0.visit(astNode_DebugPrintVisitor0);
      assertEquals("2/eBtKZB)^mNl<P-1\tBREAK -1 1\n1\t  NAME 2 1 null\n", astNode_DebugPrintVisitor0.toString());
      assertEquals("2/eBtKZB)^mNl<P-1\tBREAK -1 1\n1\t  NAME 2 1 null\n", stringBuilder0.toString());
  }

  @Test(timeout = 4000)
  public void test1()  throws Throwable  {
      BreakStatement breakStatement0 = new BreakStatement(0, 0);
      AstNode.DebugPrintVisitor astNode_DebugPrintVisitor0 = new AstNode.DebugPrintVisitor((StringBuilder) null);
      // Undeclared exception!
      try { 
        breakStatement0.visit(astNode_DebugPrintVisitor0);
        fail("Expecting exception: NullPointerException");
      
      } catch(NullPointerException e) {
         //
         // no message in exception (getMessage() returned null)
         //
         verifyException("org.mozilla.javascript.ast.AstNode$DebugPrintVisitor", e);
      }
  }

  @Test(timeout = 4000)
  public void test2()  throws Throwable  {
      BreakStatement breakStatement0 = new BreakStatement(0, 0);
      String string0 = breakStatement0.toSource(9);
      assertEquals("                  break;\n", string0);
      assertEquals(0, breakStatement0.getPosition());
      assertEquals(0, breakStatement0.getLength());
      assertEquals("121", breakStatement0.toString());
  }

  @Test(timeout = 4000)
  public void test3()  throws Throwable  {
      BreakStatement breakStatement0 = new BreakStatement(0, 0);
      Name name0 = new Name(8);
      breakStatement0.setBreakLabel(name0);
      assertEquals(1, name0.depth());
      
      String string0 = breakStatement0.toSource(9);
      assertEquals("                  break <null>;\n", string0);
  }

  @Test(timeout = 4000)
  public void test4()  throws Throwable  {
      BreakStatement breakStatement0 = new BreakStatement(0, 0);
      breakStatement0.getBreakTarget();
      assertEquals(0, breakStatement0.getPosition());
      assertEquals(0, breakStatement0.getLength());
      assertEquals("121", breakStatement0.toString());
  }

  @Test(timeout = 4000)
  public void test5()  throws Throwable  {
      BreakStatement breakStatement0 = new BreakStatement(0, 0);
      breakStatement0.getBreakLabel();
      assertEquals(0, breakStatement0.getLength());
      assertEquals(121, breakStatement0.getType());
      assertEquals(0, breakStatement0.getPosition());
  }

  @Test(timeout = 4000)
  public void test6()  throws Throwable  {
      BreakStatement breakStatement0 = new BreakStatement(0);
      assertEquals(121, breakStatement0.getType());
      assertEquals(0, breakStatement0.getPosition());
  }

  @Test(timeout = 4000)
  public void test7()  throws Throwable  {
      BreakStatement breakStatement0 = new BreakStatement();
      DoLoop doLoop0 = new DoLoop(0);
      breakStatement0.setBreakTarget(doLoop0);
      assertEquals(121, breakStatement0.getType());
  }
}
