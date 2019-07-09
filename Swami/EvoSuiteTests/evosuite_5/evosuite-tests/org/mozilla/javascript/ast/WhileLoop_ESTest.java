/*
 * This file was automatically generated by EvoSuite
 * Thu Aug 02 16:21:41 GMT 2018
 */

package org.mozilla.javascript.ast;

import org.junit.Test;
import static org.junit.Assert.*;
import static org.evosuite.runtime.EvoAssertions.*;
import org.evosuite.runtime.EvoRunner;
import org.evosuite.runtime.EvoRunnerParameters;
import org.junit.runner.RunWith;
import org.mozilla.javascript.Token;
import org.mozilla.javascript.ast.AstNode;
import org.mozilla.javascript.ast.Comment;
import org.mozilla.javascript.ast.Label;
import org.mozilla.javascript.ast.WhileLoop;

@RunWith(EvoRunner.class) @EvoRunnerParameters(mockJVMNonDeterminism = true, useVFS = true, useVNET = true, resetStaticState = true, separateClassLoader = true, useJEE = true) 
public class WhileLoop_ESTest extends WhileLoop_ESTest_scaffolding {

  @Test(timeout = 4000)
  public void test0()  throws Throwable  {
      StringBuilder stringBuilder0 = new StringBuilder();
      AstNode.DebugPrintVisitor astNode_DebugPrintVisitor0 = new AstNode.DebugPrintVisitor(stringBuilder0);
      WhileLoop whileLoop0 = new WhileLoop();
      Token.CommentType token_CommentType0 = Token.CommentType.JSDOC;
      Comment comment0 = new Comment(0, 2, token_CommentType0, "REF_NAME");
      whileLoop0.setCondition(comment0);
      // Undeclared exception!
      try { 
        whileLoop0.visit(astNode_DebugPrintVisitor0);
        fail("Expecting exception: NullPointerException");
      
      } catch(NullPointerException e) {
         //
         // no message in exception (getMessage() returned null)
         //
         verifyException("org.mozilla.javascript.ast.WhileLoop", e);
      }
  }

  @Test(timeout = 4000)
  public void test1()  throws Throwable  {
      WhileLoop whileLoop0 = new WhileLoop();
      Label label0 = new Label();
      whileLoop0.setCondition(label0);
      // Undeclared exception!
      try { 
        whileLoop0.toSource(152);
        fail("Expecting exception: NullPointerException");
      
      } catch(NullPointerException e) {
         //
         // no message in exception (getMessage() returned null)
         //
         verifyException("org.mozilla.javascript.ast.WhileLoop", e);
      }
  }

  @Test(timeout = 4000)
  public void test2()  throws Throwable  {
      WhileLoop whileLoop0 = new WhileLoop(0, 0);
      assertEquals(118, whileLoop0.getType());
  }

  @Test(timeout = 4000)
  public void test3()  throws Throwable  {
      WhileLoop whileLoop0 = new WhileLoop((-66));
      whileLoop0.getCondition();
      assertEquals(118, whileLoop0.getType());
  }
}
