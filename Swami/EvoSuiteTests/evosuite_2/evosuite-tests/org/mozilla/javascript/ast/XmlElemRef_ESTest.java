/*
 * This file was automatically generated by EvoSuite
 * Tue Jul 31 17:17:27 GMT 2018
 */

package org.mozilla.javascript.ast;

import org.junit.Test;
import static org.junit.Assert.*;
import static org.evosuite.runtime.EvoAssertions.*;
import org.evosuite.runtime.EvoRunner;
import org.evosuite.runtime.EvoRunnerParameters;
import org.junit.runner.RunWith;
import org.mozilla.javascript.ast.ArrayLiteral;
import org.mozilla.javascript.ast.AstNode;
import org.mozilla.javascript.ast.Name;
import org.mozilla.javascript.ast.Scope;
import org.mozilla.javascript.ast.XmlElemRef;

@RunWith(EvoRunner.class) @EvoRunnerParameters(mockJVMNonDeterminism = true, useVFS = true, useVNET = true, resetStaticState = true, separateClassLoader = true, useJEE = true) 
public class XmlElemRef_ESTest extends XmlElemRef_ESTest_scaffolding {

  @Test(timeout = 4000)
  public void test00()  throws Throwable  {
      XmlElemRef xmlElemRef0 = new XmlElemRef(120);
      StringBuilder stringBuilder0 = new StringBuilder("#-^");
      Scope scope0 = new Scope(24, 1);
      xmlElemRef0.setExpression(scope0);
      AstNode.DebugPrintVisitor astNode_DebugPrintVisitor0 = new AstNode.DebugPrintVisitor(stringBuilder0);
      xmlElemRef0.visit(astNode_DebugPrintVisitor0);
      assertEquals("#-^120\tREF_MEMBER 120 1\n24\t  BLOCK -96 1\n", astNode_DebugPrintVisitor0.toString());
      assertEquals((-1), xmlElemRef0.getLb());
  }

  @Test(timeout = 4000)
  public void test01()  throws Throwable  {
      XmlElemRef xmlElemRef0 = new XmlElemRef();
      Name name0 = new Name(2);
      xmlElemRef0.namespace = name0;
      // Undeclared exception!
      try { 
        xmlElemRef0.debugPrint();
        fail("Expecting exception: NullPointerException");
      
      } catch(NullPointerException e) {
         //
         // no message in exception (getMessage() returned null)
         //
         verifyException("org.mozilla.javascript.ast.XmlElemRef", e);
      }
  }

  @Test(timeout = 4000)
  public void test02()  throws Throwable  {
      XmlElemRef xmlElemRef0 = new XmlElemRef((-2097), 1);
      ArrayLiteral arrayLiteral0 = new ArrayLiteral();
      xmlElemRef0.setExpression(arrayLiteral0);
      String string0 = xmlElemRef0.toSource((-2627));
      assertEquals((-1), xmlElemRef0.getLb());
      assertEquals("[[]]", string0);
      assertEquals((-1), xmlElemRef0.getRb());
      assertEquals("78", xmlElemRef0.toString());
  }

  @Test(timeout = 4000)
  public void test03()  throws Throwable  {
      XmlElemRef xmlElemRef0 = new XmlElemRef();
      Name name0 = new Name(2);
      xmlElemRef0.namespace = name0;
      // Undeclared exception!
      try { 
        xmlElemRef0.toSource(5);
        fail("Expecting exception: NullPointerException");
      
      } catch(NullPointerException e) {
         //
         // no message in exception (getMessage() returned null)
         //
         verifyException("org.mozilla.javascript.ast.XmlElemRef", e);
      }
  }

  @Test(timeout = 4000)
  public void test04()  throws Throwable  {
      XmlElemRef xmlElemRef0 = new XmlElemRef(0);
      xmlElemRef0.atPos = 0;
      // Undeclared exception!
      try { 
        xmlElemRef0.toSource();
        fail("Expecting exception: NullPointerException");
      
      } catch(NullPointerException e) {
         //
         // no message in exception (getMessage() returned null)
         //
         verifyException("org.mozilla.javascript.ast.XmlElemRef", e);
      }
  }

  @Test(timeout = 4000)
  public void test05()  throws Throwable  {
      XmlElemRef xmlElemRef0 = new XmlElemRef(0);
      xmlElemRef0.setRb((-1316));
      assertEquals((-1316), xmlElemRef0.getRb());
  }

  @Test(timeout = 4000)
  public void test06()  throws Throwable  {
      XmlElemRef xmlElemRef0 = new XmlElemRef();
      xmlElemRef0.setLb(331);
      assertEquals(331, xmlElemRef0.getLb());
  }

  @Test(timeout = 4000)
  public void test07()  throws Throwable  {
      XmlElemRef xmlElemRef0 = new XmlElemRef();
      xmlElemRef0.setBrackets(331, 331);
      assertEquals(331, xmlElemRef0.getLb());
  }

  @Test(timeout = 4000)
  public void test08()  throws Throwable  {
      XmlElemRef xmlElemRef0 = new XmlElemRef();
      int int0 = xmlElemRef0.getRb();
      assertEquals((-1), xmlElemRef0.getLb());
      assertEquals((-1), int0);
      assertEquals("78", xmlElemRef0.toString());
  }

  @Test(timeout = 4000)
  public void test09()  throws Throwable  {
      XmlElemRef xmlElemRef0 = new XmlElemRef((-2097), 1);
      int int0 = xmlElemRef0.getLb();
      assertEquals((-1), int0);
      assertEquals((-1), xmlElemRef0.getRb());
      assertEquals("78", xmlElemRef0.toString());
  }

  @Test(timeout = 4000)
  public void test10()  throws Throwable  {
      XmlElemRef xmlElemRef0 = new XmlElemRef();
      xmlElemRef0.getExpression();
      assertEquals((-1), xmlElemRef0.getLb());
      assertEquals("78", xmlElemRef0.toString());
      assertEquals((-1), xmlElemRef0.getRb());
  }
}
