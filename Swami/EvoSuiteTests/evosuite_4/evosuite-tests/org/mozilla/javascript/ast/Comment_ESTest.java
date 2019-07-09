/*
 * This file was automatically generated by EvoSuite
 * Wed Aug 01 16:56:42 GMT 2018
 */

package org.mozilla.javascript.ast;

import org.junit.Test;
import static org.junit.Assert.*;
import org.evosuite.runtime.EvoRunner;
import org.evosuite.runtime.EvoRunnerParameters;
import org.junit.runner.RunWith;
import org.mozilla.javascript.Token;
import org.mozilla.javascript.ast.AstNode;
import org.mozilla.javascript.ast.Comment;

@RunWith(EvoRunner.class) @EvoRunnerParameters(mockJVMNonDeterminism = true, useVFS = true, useVNET = true, resetStaticState = true, separateClassLoader = true, useJEE = true) 
public class Comment_ESTest extends Comment_ESTest_scaffolding {

  @Test(timeout = 4000)
  public void test0()  throws Throwable  {
      Token.CommentType token_CommentType0 = Token.CommentType.JSDOC;
      Comment comment0 = new Comment(3766, 3766, token_CommentType0, "9");
      StringBuilder stringBuilder0 = new StringBuilder();
      AstNode.DebugPrintVisitor astNode_DebugPrintVisitor0 = new AstNode.DebugPrintVisitor(stringBuilder0);
      comment0.visit(astNode_DebugPrintVisitor0);
      assertEquals("3766\tCOMMENT 3766 3766\n", astNode_DebugPrintVisitor0.toString());
      assertEquals("162", comment0.toString());
  }

  @Test(timeout = 4000)
  public void test1()  throws Throwable  {
      Token.CommentType token_CommentType0 = Token.CommentType.HTML;
      Comment comment0 = new Comment(118, 118, token_CommentType0, "]&muq(%4oMrDW");
      String string0 = comment0.toSource();
      assertEquals("]&muq(%4oMrDW", string0);
      assertEquals("162", comment0.toString());
  }

  @Test(timeout = 4000)
  public void test2()  throws Throwable  {
      Token.CommentType token_CommentType0 = Token.CommentType.HTML;
      Comment comment0 = new Comment(118, 118, token_CommentType0, "]&muq(%4oMrDW");
      comment0.setCommentType(token_CommentType0);
      assertEquals(162, comment0.getType());
  }

  @Test(timeout = 4000)
  public void test3()  throws Throwable  {
      Token.CommentType token_CommentType0 = Token.CommentType.HTML;
      Comment comment0 = new Comment(118, 118, token_CommentType0, "]&muq(%4oMrDW");
      comment0.getValue();
      assertEquals("162", comment0.toString());
  }

  @Test(timeout = 4000)
  public void test4()  throws Throwable  {
      Token.CommentType token_CommentType0 = Token.CommentType.JSDOC;
      Comment comment0 = new Comment(3766, 3766, token_CommentType0, "9");
      comment0.getCommentType();
      assertEquals(162, comment0.getType());
  }
}
