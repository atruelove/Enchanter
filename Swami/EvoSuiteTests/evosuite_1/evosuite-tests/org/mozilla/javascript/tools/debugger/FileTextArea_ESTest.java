/*
 * This file was automatically generated by EvoSuite
 * Tue Jul 31 20:50:26 GMT 2018
 */

package org.mozilla.javascript.tools.debugger;

import org.junit.Test;
import static org.junit.Assert.*;
import static org.evosuite.runtime.EvoAssertions.*;
import java.awt.Dimension;
import java.awt.IllegalComponentStateException;
import java.awt.event.ActionEvent;
import java.awt.event.KeyEvent;
import java.awt.event.MouseEvent;
import java.awt.event.MouseWheelEvent;
import javax.swing.JLayeredPane;
import javax.swing.JMenu;
import javax.swing.JMenuBar;
import javax.swing.JScrollBar;
import javax.swing.JScrollPane;
import javax.swing.JSpinner;
import javax.swing.MenuElement;
import javax.swing.MenuSelectionManager;
import javax.swing.SpinnerListModel;
import javax.swing.event.MenuDragMouseEvent;
import javax.swing.event.MenuKeyEvent;
import javax.swing.event.PopupMenuEvent;
import org.evosuite.runtime.EvoRunner;
import org.evosuite.runtime.EvoRunnerParameters;
import org.junit.runner.RunWith;
import org.mozilla.javascript.tools.debugger.FileTextArea;
import org.mozilla.javascript.tools.debugger.FileWindow;

@RunWith(EvoRunner.class) @EvoRunnerParameters(mockJVMNonDeterminism = true, useVFS = true, useVNET = true, resetStaticState = true, separateClassLoader = true, useJEE = true) 
public class FileTextArea_ESTest extends FileTextArea_ESTest_scaffolding {

  @Test(timeout = 4000)
  public void test00()  throws Throwable  {
      FileTextArea fileTextArea0 = new FileTextArea((FileWindow) null);
      fileTextArea0.select(2141);
      assertFalse(fileTextArea0.isFocusCycleRoot());
  }

  @Test(timeout = 4000)
  public void test01()  throws Throwable  {
      FileTextArea fileTextArea0 = new FileTextArea((FileWindow) null);
      Dimension dimension0 = fileTextArea0.getPreferredSize();
      fileTextArea0.setSize(dimension0);
      // Undeclared exception!
      try { 
        fileTextArea0.select(0);
        fail("Expecting exception: NullPointerException");
      
      } catch(NullPointerException e) {
         //
         // no message in exception (getMessage() returned null)
         //
         verifyException("org.mozilla.javascript.tools.debugger.FileTextArea", e);
      }
  }

  @Test(timeout = 4000)
  public void test02()  throws Throwable  {
      FileTextArea fileTextArea0 = new FileTextArea((FileWindow) null);
      fileTextArea0.select(0);
      assertFalse(fileTextArea0.isFocusCycleRoot());
  }

  @Test(timeout = 4000)
  public void test03()  throws Throwable  {
      FileTextArea fileTextArea0 = new FileTextArea((FileWindow) null);
      Object object0 = fileTextArea0.getTreeLock();
      PopupMenuEvent popupMenuEvent0 = new PopupMenuEvent(object0);
      fileTextArea0.popupMenuWillBecomeVisible(popupMenuEvent0);
      assertFalse(fileTextArea0.isFocusCycleRoot());
  }

  @Test(timeout = 4000)
  public void test04()  throws Throwable  {
      FileTextArea fileTextArea0 = new FileTextArea((FileWindow) null);
      JMenuBar jMenuBar0 = new JMenuBar();
      PopupMenuEvent popupMenuEvent0 = new PopupMenuEvent(jMenuBar0);
      fileTextArea0.popupMenuWillBecomeInvisible(popupMenuEvent0);
      assertFalse(fileTextArea0.isFocusTraversalPolicyProvider());
  }

  @Test(timeout = 4000)
  public void test05()  throws Throwable  {
      JMenu jMenu0 = new JMenu();
      FileTextArea fileTextArea0 = new FileTextArea((FileWindow) null);
      PopupMenuEvent popupMenuEvent0 = new PopupMenuEvent(jMenu0);
      fileTextArea0.popupMenuCanceled(popupMenuEvent0);
      assertFalse(fileTextArea0.isFocusCycleRoot());
  }

  @Test(timeout = 4000)
  public void test06()  throws Throwable  {
      FileTextArea fileTextArea0 = new FileTextArea((FileWindow) null);
      JScrollPane jScrollPane0 = new JScrollPane(fileTextArea0);
      JScrollBar jScrollBar0 = jScrollPane0.getVerticalScrollBar();
      MouseEvent mouseEvent0 = new MouseEvent(jScrollBar0, 0, 753L, 2928, 2928, 12, (-19), false);
      fileTextArea0.mouseReleased(mouseEvent0);
      assertFalse(mouseEvent0.isAltDown());
  }

  @Test(timeout = 4000)
  public void test07()  throws Throwable  {
      FileTextArea fileTextArea0 = new FileTextArea((FileWindow) null);
      MouseWheelEvent mouseWheelEvent0 = new MouseWheelEvent(fileTextArea0, 505, 505, 0, 302, 505, 2, false, 0, 302, 0);
      fileTextArea0.mousePressed(mouseWheelEvent0);
      assertFalse(fileTextArea0.isFocusTraversalPolicyProvider());
  }

  @Test(timeout = 4000)
  public void test08()  throws Throwable  {
      JMenu jMenu0 = new JMenu();
      FileTextArea fileTextArea0 = new FileTextArea((FileWindow) null);
      MouseEvent mouseEvent0 = new MouseEvent(jMenu0, 935, 0L, 0, (-1872), (-1872), (-1872), true);
      fileTextArea0.mouseExited(mouseEvent0);
      assertFalse(fileTextArea0.isFocusCycleRoot());
  }

  @Test(timeout = 4000)
  public void test09()  throws Throwable  {
      MenuElement[] menuElementArray0 = new MenuElement[3];
      JMenu jMenu0 = new JMenu();
      MenuSelectionManager menuSelectionManager0 = new MenuSelectionManager();
      FileTextArea fileTextArea0 = new FileTextArea((FileWindow) null);
      MenuDragMouseEvent menuDragMouseEvent0 = new MenuDragMouseEvent(jMenu0, 935, 1539L, 1692, 1692, 12, 935, 935, (-3278), false, menuElementArray0, menuSelectionManager0);
      fileTextArea0.mouseEntered(menuDragMouseEvent0);
      assertFalse(fileTextArea0.isFocusTraversalPolicySet());
  }

  @Test(timeout = 4000)
  public void test10()  throws Throwable  {
      FileTextArea fileTextArea0 = new FileTextArea((FileWindow) null);
      MenuElement[] menuElementArray0 = new MenuElement[0];
      MenuSelectionManager menuSelectionManager0 = new MenuSelectionManager();
      MenuKeyEvent menuKeyEvent0 = new MenuKeyEvent(fileTextArea0, (-171), 0L, 0, (-1565), 'H', menuElementArray0, menuSelectionManager0);
      fileTextArea0.keyTyped(menuKeyEvent0);
      assertFalse(fileTextArea0.getIgnoreRepaint());
  }

  @Test(timeout = 4000)
  public void test11()  throws Throwable  {
      FileTextArea fileTextArea0 = new FileTextArea((FileWindow) null);
      KeyEvent keyEvent0 = new KeyEvent(fileTextArea0, 0, 1046L, 32, 0, 'J');
      fileTextArea0.keyReleased(keyEvent0);
      assertTrue(keyEvent0.isAltGraphDown());
  }

  @Test(timeout = 4000)
  public void test12()  throws Throwable  {
      FileTextArea fileTextArea0 = new FileTextArea((FileWindow) null);
      KeyEvent keyEvent0 = new KeyEvent(fileTextArea0, '\u0019', 2122, 2122, 8, '\u0019');
      fileTextArea0.keyPressed(keyEvent0);
      assertFalse(keyEvent0.isMetaDown());
  }

  @Test(timeout = 4000)
  public void test13()  throws Throwable  {
      FileTextArea fileTextArea0 = new FileTextArea((FileWindow) null);
      MouseWheelEvent mouseWheelEvent0 = new MouseWheelEvent(fileTextArea0, 3583, 3583, 848, 65508, 65508, 848, 0, 0, false, 161, 161, 65508, 0);
      fileTextArea0.mouseClicked(mouseWheelEvent0);
      assertEquals(3583, mouseWheelEvent0.getID());
  }

  @Test(timeout = 4000)
  public void test14()  throws Throwable  {
      FileTextArea fileTextArea0 = new FileTextArea((FileWindow) null);
      MouseWheelEvent mouseWheelEvent0 = new MouseWheelEvent(fileTextArea0, 4141, 4141, 4141, 4141, 4141, 4141, true, 4141, 4141, 4141);
      // Undeclared exception!
      try { 
        fileTextArea0.mousePressed(mouseWheelEvent0);
        fail("Expecting exception: IllegalComponentStateException");
      
      } catch(IllegalComponentStateException e) {
         //
         // component must be showing on the screen to determine its location
         //
         verifyException("java.awt.Component", e);
      }
  }

  @Test(timeout = 4000)
  public void test15()  throws Throwable  {
      FileTextArea fileTextArea0 = new FileTextArea((FileWindow) null);
      Integer integer0 = new Integer(3583);
      ActionEvent actionEvent0 = new ActionEvent(integer0, 87, "");
      fileTextArea0.actionPerformed(actionEvent0);
      assertFalse(fileTextArea0.isFocusCycleRoot());
  }

  @Test(timeout = 4000)
  public void test16()  throws Throwable  {
      FileTextArea fileTextArea0 = new FileTextArea((FileWindow) null);
      SpinnerListModel spinnerListModel0 = new SpinnerListModel();
      JSpinner jSpinner0 = new JSpinner(spinnerListModel0);
      JSpinner.ListEditor jSpinner_ListEditor0 = new JSpinner.ListEditor(jSpinner0);
      ActionEvent actionEvent0 = new ActionEvent(jSpinner_ListEditor0, 3587, "Clear Breakpoint", 3587, 3587);
      // Undeclared exception!
      try { 
        fileTextArea0.actionPerformed(actionEvent0);
        fail("Expecting exception: NullPointerException");
      
      } catch(NullPointerException e) {
         //
         // no message in exception (getMessage() returned null)
         //
         verifyException("org.mozilla.javascript.tools.debugger.FileTextArea", e);
      }
  }

  @Test(timeout = 4000)
  public void test17()  throws Throwable  {
      FileTextArea fileTextArea0 = new FileTextArea((FileWindow) null);
      MenuSelectionManager menuSelectionManager0 = MenuSelectionManager.defaultManager();
      ActionEvent actionEvent0 = new ActionEvent(menuSelectionManager0, 0, "Set Breakpoint", 0, 0);
      // Undeclared exception!
      try { 
        fileTextArea0.actionPerformed(actionEvent0);
        fail("Expecting exception: NullPointerException");
      
      } catch(NullPointerException e) {
         //
         // no message in exception (getMessage() returned null)
         //
         verifyException("org.mozilla.javascript.tools.debugger.FileTextArea", e);
      }
  }

  @Test(timeout = 4000)
  public void test18()  throws Throwable  {
      FileTextArea fileTextArea0 = new FileTextArea((FileWindow) null);
      fileTextArea0.setSize(2141, 2141);
      Integer integer0 = JLayeredPane.FRAME_CONTENT_LAYER;
      ActionEvent actionEvent0 = new ActionEvent(integer0, (-895), "Run", (-895));
      // Undeclared exception!
      try { 
        fileTextArea0.actionPerformed(actionEvent0);
        fail("Expecting exception: NullPointerException");
      
      } catch(NullPointerException e) {
         //
         // no message in exception (getMessage() returned null)
         //
         verifyException("org.mozilla.javascript.tools.debugger.FileTextArea", e);
      }
  }
}
