/*
 * This file was automatically generated by EvoSuite
 * Wed Aug 01 16:43:24 GMT 2018
 */

package org.mozilla.javascript.ast;

import org.junit.Test;
import static org.junit.Assert.*;
import static org.evosuite.runtime.EvoAssertions.*;
import org.evosuite.runtime.EvoRunner;
import org.evosuite.runtime.EvoRunnerParameters;
import org.junit.runner.RunWith;
import org.mozilla.javascript.ast.AstNode;
import org.mozilla.javascript.ast.Block;
import org.mozilla.javascript.ast.Jump;
import org.mozilla.javascript.ast.Label;
import org.mozilla.javascript.ast.RegExpLiteral;
import org.mozilla.javascript.ast.StringLiteral;
import org.mozilla.javascript.ast.XmlElemRef;
import org.mozilla.javascript.ast.XmlMemberGet;
import org.mozilla.javascript.ast.XmlPropRef;

@RunWith(EvoRunner.class) @EvoRunnerParameters(mockJVMNonDeterminism = true, useVFS = true, useVNET = true, resetStaticState = true, separateClassLoader = true, useJEE = true) 
public class XmlMemberGet_ESTest extends XmlMemberGet_ESTest_scaffolding {

  @Test(timeout = 4000)
  public void test0()  throws Throwable  {
      XmlMemberGet xmlMemberGet0 = new XmlMemberGet(1234, 1234);
      xmlMemberGet0.setOperator(102);
      RegExpLiteral regExpLiteral0 = new RegExpLiteral(1048);
      xmlMemberGet0.left = (AstNode) regExpLiteral0;
      // Undeclared exception!
      try { 
        xmlMemberGet0.toSource(1);
        fail("Expecting exception: NullPointerException");
      
      } catch(NullPointerException e) {
         //
         // no message in exception (getMessage() returned null)
         //
         verifyException("org.mozilla.javascript.ast.XmlMemberGet", e);
      }
  }

  @Test(timeout = 4000)
  public void test1()  throws Throwable  {
      XmlMemberGet xmlMemberGet0 = new XmlMemberGet((-2030), (-1212));
      XmlElemRef xmlElemRef0 = new XmlElemRef();
      xmlMemberGet0.setProperty(xmlElemRef0);
      assertEquals("144", xmlMemberGet0.toString());
  }

  @Test(timeout = 4000)
  public void test2()  throws Throwable  {
      Jump jump0 = new Jump();
      XmlPropRef xmlPropRef0 = new XmlPropRef((-1429), 4);
      XmlMemberGet xmlMemberGet0 = new XmlMemberGet(0, 0, jump0, xmlPropRef0);
      xmlMemberGet0.getMemberRef();
      assertEquals(144, xmlMemberGet0.getType());
  }

  @Test(timeout = 4000)
  public void test3()  throws Throwable  {
      StringLiteral stringLiteral0 = new StringLiteral(267);
      XmlPropRef xmlPropRef0 = new XmlPropRef();
      XmlMemberGet xmlMemberGet0 = new XmlMemberGet(stringLiteral0, xmlPropRef0, 27);
      assertEquals(144, xmlMemberGet0.getOperator());
  }

  @Test(timeout = 4000)
  public void test4()  throws Throwable  {
      Block block0 = new Block(1672);
      XmlPropRef xmlPropRef0 = new XmlPropRef(41, 3952);
      XmlMemberGet xmlMemberGet0 = new XmlMemberGet(block0, xmlPropRef0);
      assertEquals("144", xmlMemberGet0.toString());
  }

  @Test(timeout = 4000)
  public void test5()  throws Throwable  {
      Label label0 = new Label(2129);
      XmlElemRef xmlElemRef0 = new XmlElemRef(0, 6);
      XmlMemberGet xmlMemberGet0 = new XmlMemberGet(2129, 2129, label0, xmlElemRef0);
      xmlMemberGet0.setTarget(xmlElemRef0);
      assertEquals(144, xmlMemberGet0.getOperator());
  }

  @Test(timeout = 4000)
  public void test6()  throws Throwable  {
      XmlMemberGet xmlMemberGet0 = new XmlMemberGet((-1));
      assertEquals(144, xmlMemberGet0.getType());
  }

  @Test(timeout = 4000)
  public void test7()  throws Throwable  {
      XmlMemberGet xmlMemberGet0 = new XmlMemberGet();
      xmlMemberGet0.getTarget();
      assertEquals("144", xmlMemberGet0.toString());
  }
}
