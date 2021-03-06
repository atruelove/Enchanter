/*
 * This file was automatically generated by EvoSuite
 * Wed Aug 01 20:11:56 GMT 2018
 */

package org.mozilla.javascript.tools.debugger;

import org.junit.Test;
import static org.junit.Assert.*;
import static org.evosuite.runtime.EvoAssertions.*;
import java.awt.event.ActionEvent;
import javax.swing.plaf.synth.SynthPanelUI;
import org.evosuite.runtime.EvoRunner;
import org.evosuite.runtime.EvoRunnerParameters;
import org.junit.runner.RunWith;
import org.mozilla.javascript.tools.debugger.ContextWindow;
import org.mozilla.javascript.tools.debugger.SwingGui;

@RunWith(EvoRunner.class) @EvoRunnerParameters(mockJVMNonDeterminism = true, useVFS = true, useVNET = true, resetStaticState = true, separateClassLoader = true, useJEE = true) 
public class ContextWindow_ESTest extends ContextWindow_ESTest_scaffolding {

  @Test(timeout = 4000)
  public void test0()  throws Throwable  {
      ContextWindow contextWindow0 = new ContextWindow((SwingGui) null);
      contextWindow0.disableUpdate();
      assertFalse(contextWindow0.getIgnoreRepaint());
  }

  @Test(timeout = 4000)
  public void test1()  throws Throwable  {
      ContextWindow contextWindow0 = new ContextWindow((SwingGui) null);
      contextWindow0.enableUpdate();
      ActionEvent actionEvent0 = new ActionEvent("org.mozilla.jav{script.tools.dYugger.ontextWindow$2", (-1289), "org.mozilla.jav{script.tools.dYugger.ontextWindow$2");
      contextWindow0.actionPerformed(actionEvent0);
      assertEquals(0, actionEvent0.getModifiers());
  }

  @Test(timeout = 4000)
  public void test2()  throws Throwable  {
      ContextWindow contextWindow0 = new ContextWindow((SwingGui) null);
      SynthPanelUI synthPanelUI0 = new SynthPanelUI();
      contextWindow0.enableUpdate();
      ActionEvent actionEvent0 = new ActionEvent(synthPanelUI0, (-108114903), "ContextSwitch", (-108114903));
      // Undeclared exception!
      try { 
        contextWindow0.actionPerformed(actionEvent0);
        fail("Expecting exception: NullPointerException");
      
      } catch(NullPointerException e) {
         //
         // no message in exception (getMessage() returned null)
         //
         verifyException("org.mozilla.javascript.tools.debugger.ContextWindow", e);
      }
  }
}
