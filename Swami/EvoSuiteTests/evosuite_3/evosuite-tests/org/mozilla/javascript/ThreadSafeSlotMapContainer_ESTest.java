/*
 * This file was automatically generated by EvoSuite
 * Thu Aug 02 01:40:49 GMT 2018
 */

package org.mozilla.javascript;

import org.junit.Test;
import static org.junit.Assert.*;
import java.util.Iterator;
import org.evosuite.runtime.EvoRunner;
import org.evosuite.runtime.EvoRunnerParameters;
import org.junit.runner.RunWith;
import org.mozilla.javascript.HashSlotMap;
import org.mozilla.javascript.ScriptableObject;
import org.mozilla.javascript.ThreadSafeSlotMapContainer;

@RunWith(EvoRunner.class) @EvoRunnerParameters(mockJVMNonDeterminism = true, useVFS = true, useVNET = true, resetStaticState = true, separateClassLoader = true, useJEE = true) 
public class ThreadSafeSlotMapContainer_ESTest extends ThreadSafeSlotMapContainer_ESTest_scaffolding {

  @Test(timeout = 4000)
  public void test0()  throws Throwable  {
      ThreadSafeSlotMapContainer threadSafeSlotMapContainer0 = new ThreadSafeSlotMapContainer((-2863));
      threadSafeSlotMapContainer0.readLock();
      threadSafeSlotMapContainer0.unlockRead(257L);
  }

  @Test(timeout = 4000)
  public void test1()  throws Throwable  {
      ThreadSafeSlotMapContainer threadSafeSlotMapContainer0 = new ThreadSafeSlotMapContainer((-2863));
      int int0 = threadSafeSlotMapContainer0.size();
      assertEquals(0, int0);
  }

  @Test(timeout = 4000)
  public void test2()  throws Throwable  {
      ThreadSafeSlotMapContainer threadSafeSlotMapContainer0 = new ThreadSafeSlotMapContainer(0);
      threadSafeSlotMapContainer0.remove("boD|AUAMhBtdlA_y", 0);
  }

  @Test(timeout = 4000)
  public void test3()  throws Throwable  {
      ThreadSafeSlotMapContainer threadSafeSlotMapContainer0 = new ThreadSafeSlotMapContainer((-2863));
      ScriptableObject.Slot scriptableObject_Slot0 = threadSafeSlotMapContainer0.query("", 1526);
      assertNull(scriptableObject_Slot0);
  }

  @Test(timeout = 4000)
  public void test4()  throws Throwable  {
      ThreadSafeSlotMapContainer threadSafeSlotMapContainer0 = new ThreadSafeSlotMapContainer((-2863));
      threadSafeSlotMapContainer0.readLock();
      Iterator<ScriptableObject.Slot> iterator0 = threadSafeSlotMapContainer0.iterator();
      assertNotNull(iterator0);
  }

  @Test(timeout = 4000)
  public void test5()  throws Throwable  {
      ThreadSafeSlotMapContainer threadSafeSlotMapContainer0 = new ThreadSafeSlotMapContainer(0);
      boolean boolean0 = threadSafeSlotMapContainer0.isEmpty();
      assertTrue(boolean0);
  }

  @Test(timeout = 4000)
  public void test6()  throws Throwable  {
      ThreadSafeSlotMapContainer threadSafeSlotMapContainer0 = new ThreadSafeSlotMapContainer((-2863));
      Object object0 = new Object();
      ScriptableObject.SlotAccess scriptableObject_SlotAccess0 = ScriptableObject.SlotAccess.CONVERT_ACCESSOR_TO_DATA;
      ScriptableObject.Slot scriptableObject_Slot0 = threadSafeSlotMapContainer0.get(object0, 1159, scriptableObject_SlotAccess0);
      assertNotNull(scriptableObject_Slot0);
  }

  @Test(timeout = 4000)
  public void test7()  throws Throwable  {
      ThreadSafeSlotMapContainer threadSafeSlotMapContainer0 = new ThreadSafeSlotMapContainer((-2863));
      threadSafeSlotMapContainer0.readLock();
      int int0 = threadSafeSlotMapContainer0.dirtySize();
      assertEquals(0, int0);
  }

  @Test(timeout = 4000)
  public void test8()  throws Throwable  {
      ThreadSafeSlotMapContainer threadSafeSlotMapContainer0 = new ThreadSafeSlotMapContainer(1);
      HashSlotMap hashSlotMap0 = new HashSlotMap();
      ScriptableObject.SlotAccess scriptableObject_SlotAccess0 = ScriptableObject.SlotAccess.MODIFY_CONST;
      ScriptableObject.Slot scriptableObject_Slot0 = hashSlotMap0.get(threadSafeSlotMapContainer0, 1, scriptableObject_SlotAccess0);
      threadSafeSlotMapContainer0.addSlot(scriptableObject_Slot0);
  }
}
