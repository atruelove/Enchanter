/*
 * This file was automatically generated by EvoSuite
 * Wed Aug 01 19:54:20 GMT 2018
 */

package org.mozilla.javascript.tools.debugger;

import org.junit.Test;
import static org.junit.Assert.*;
import static org.evosuite.runtime.EvoAssertions.*;
import java.awt.event.ActionEvent;
import javax.swing.JCheckBoxMenuItem;
import javax.swing.JMenu;
import org.evosuite.runtime.EvoRunner;
import org.evosuite.runtime.EvoRunnerParameters;
import org.junit.runner.RunWith;
import org.mozilla.javascript.tools.debugger.Menubar;
import org.mozilla.javascript.tools.debugger.SwingGui;

@RunWith(EvoRunner.class) @EvoRunnerParameters(mockJVMNonDeterminism = true, useVFS = true, useVNET = true, resetStaticState = true, separateClassLoader = true, useJEE = true) 
public class Menubar_ESTest extends Menubar_ESTest_scaffolding {

  @Test(timeout = 4000)
  public void test0()  throws Throwable  {
      Menubar menubar0 = new Menubar((SwingGui) null);
      JMenu jMenu0 = menubar0.getDebugMenu();
      assertTrue(jMenu0.getFocusTraversalKeysEnabled());
  }

  @Test(timeout = 4000)
  public void test1()  throws Throwable  {
      Menubar menubar0 = new Menubar((SwingGui) null);
      menubar0.addFile("1 Conole");
      menubar0.addFile("1 Conole");
      menubar0.addFile("1 Conole");
      menubar0.addFile("1 Conole");
      menubar0.addFile("1 Conole");
      menubar0.addFile("1 Conole");
      menubar0.addFile("1 Conole");
      assertFalse(menubar0.isFocusCycleRoot());
  }

  @Test(timeout = 4000)
  public void test2()  throws Throwable  {
      Menubar menubar0 = new Menubar((SwingGui) null);
      JCheckBoxMenuItem jCheckBoxMenuItem0 = menubar0.getBreakOnReturn();
      ActionEvent actionEvent0 = new ActionEvent(jCheckBoxMenuItem0, (-1985), "mUP+scaR");
      // Undeclared exception!
      try { 
        menubar0.actionPerformed(actionEvent0);
        fail("Expecting exception: NullPointerException");
      
      } catch(NullPointerException e) {
         //
         // no message in exception (getMessage() returned null)
         //
         verifyException("org.mozilla.javascript.tools.debugger.Menubar", e);
      }
  }

  @Test(timeout = 4000)
  public void test3()  throws Throwable  {
      Menubar menubar0 = new Menubar((SwingGui) null);
      JCheckBoxMenuItem jCheckBoxMenuItem0 = menubar0.getBreakOnEnter();
      ActionEvent actionEvent0 = new ActionEvent(jCheckBoxMenuItem0, 20, "1CMQpdA}E4M,}!TF");
      // Undeclared exception!
      try { 
        menubar0.actionPerformed(actionEvent0);
        fail("Expecting exception: NullPointerException");
      
      } catch(NullPointerException e) {
         //
         // no message in exception (getMessage() returned null)
         //
         verifyException("org.mozilla.javascript.tools.debugger.Menubar", e);
      }
  }

  @Test(timeout = 4000)
  public void test4()  throws Throwable  {
      Menubar menubar0 = new Menubar((SwingGui) null);
      JCheckBoxMenuItem jCheckBoxMenuItem0 = menubar0.getBreakOnExceptions();
      ActionEvent actionEvent0 = new ActionEvent(jCheckBoxMenuItem0, 5, "3 1 Co^ol", 5, 5);
      // Undeclared exception!
      try { 
        menubar0.actionPerformed(actionEvent0);
        fail("Expecting exception: NullPointerException");
      
      } catch(NullPointerException e) {
         //
         // no message in exception (getMessage() returned null)
         //
         verifyException("org.mozilla.javascript.tools.debugger.Menubar", e);
      }
  }

  @Test(timeout = 4000)
  public void test5()  throws Throwable  {
      Menubar menubar0 = new Menubar((SwingGui) null);
      ActionEvent actionEvent0 = new ActionEvent(menubar0, 5, "%1U~K", 5);
      // Undeclared exception!
      try { 
        menubar0.actionPerformed(actionEvent0);
        fail("Expecting exception: NullPointerException");
      
      } catch(NullPointerException e) {
         //
         // no message in exception (getMessage() returned null)
         //
         verifyException("org.mozilla.javascript.tools.debugger.Menubar", e);
      }
  }

  @Test(timeout = 4000)
  public void test6()  throws Throwable  {
      Menubar menubar0 = new Menubar((SwingGui) null);
      ActionEvent actionEvent0 = new ActionEvent(menubar0, 1550, "Motif");
      menubar0.actionPerformed(actionEvent0);
      assertEquals(0, actionEvent0.getModifiers());
  }

  @Test(timeout = 4000)
  public void test7()  throws Throwable  {
      ActionEvent actionEvent0 = new ActionEvent("Windows", (-1947), "Windows");
      Menubar menubar0 = new Menubar((SwingGui) null);
      menubar0.actionPerformed(actionEvent0);
      assertEquals((-1947), actionEvent0.getID());
  }

  @Test(timeout = 4000)
  public void test8()  throws Throwable  {
      Menubar menubar0 = new Menubar((SwingGui) null);
      ActionEvent actionEvent0 = new ActionEvent("Metal", (-48), "Metal", (-48));
      menubar0.actionPerformed(actionEvent0);
      assertEquals(0L, actionEvent0.getWhen());
  }
}
