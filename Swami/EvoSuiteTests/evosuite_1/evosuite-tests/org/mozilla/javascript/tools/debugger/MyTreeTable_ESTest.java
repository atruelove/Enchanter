/*
 * This file was automatically generated by EvoSuite
 * Tue Jul 31 22:16:00 GMT 2018
 */

package org.mozilla.javascript.tools.debugger;

import org.junit.Test;
import static org.junit.Assert.*;
import java.awt.event.MouseWheelEvent;
import java.util.EventObject;
import javax.swing.JTree;
import org.evosuite.runtime.EvoRunner;
import org.evosuite.runtime.EvoRunnerParameters;
import org.junit.runner.RunWith;
import org.mozilla.javascript.tools.debugger.MyTreeTable;
import org.mozilla.javascript.tools.debugger.VariableModel;

@RunWith(EvoRunner.class) @EvoRunnerParameters(mockJVMNonDeterminism = true, useVFS = true, useVNET = true, resetStaticState = true, separateClassLoader = false, useJEE = true) 
public class MyTreeTable_ESTest extends MyTreeTable_ESTest_scaffolding {

  @Test(timeout = 4000)
  public void test0()  throws Throwable  {
      VariableModel variableModel0 = new VariableModel();
      MyTreeTable myTreeTable0 = new MyTreeTable(variableModel0);
      JTree jTree0 = myTreeTable0.resetTree(variableModel0);
      assertFalse(jTree0.isFocusTraversalPolicyProvider());
  }

  @Test(timeout = 4000)
  public void test1()  throws Throwable  {
      VariableModel variableModel0 = new VariableModel();
      MyTreeTable myTreeTable0 = new MyTreeTable(variableModel0);
      boolean boolean0 = myTreeTable0.isCellEditable((EventObject) null);
      assertTrue(boolean0);
  }

  @Test(timeout = 4000)
  public void test2()  throws Throwable  {
      VariableModel variableModel0 = new VariableModel();
      MyTreeTable myTreeTable0 = new MyTreeTable(variableModel0);
      EventObject eventObject0 = new EventObject(variableModel0);
      boolean boolean0 = myTreeTable0.isCellEditable(eventObject0);
      assertFalse(boolean0);
  }

  @Test(timeout = 4000)
  public void test3()  throws Throwable  {
      VariableModel variableModel0 = new VariableModel();
      MyTreeTable myTreeTable0 = new MyTreeTable(variableModel0);
      MouseWheelEvent mouseWheelEvent0 = new MouseWheelEvent(myTreeTable0, 64, 1466, 0, 64, 64, 1466, false, 1466, 1466, 1466);
      boolean boolean0 = myTreeTable0.isCellEditable((EventObject) mouseWheelEvent0);
      assertTrue(boolean0);
  }

  @Test(timeout = 4000)
  public void test4()  throws Throwable  {
      VariableModel variableModel0 = new VariableModel();
      MyTreeTable myTreeTable0 = new MyTreeTable(variableModel0);
      MouseWheelEvent mouseWheelEvent0 = new MouseWheelEvent(myTreeTable0, (-16), (-16), (-16), (-16), (-16), (-16), true, (-16), (-16), (-16));
      boolean boolean0 = myTreeTable0.isCellEditable((EventObject) mouseWheelEvent0);
      assertFalse(boolean0);
  }
}
