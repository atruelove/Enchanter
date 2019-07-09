/*
 * This file was automatically generated by EvoSuite
 * Wed Aug 01 02:55:56 GMT 2018
 */

package org.mozilla.javascript;

import org.junit.Test;
import static org.junit.Assert.*;
import static org.evosuite.runtime.EvoAssertions.*;
import java.io.ByteArrayInputStream;
import java.io.DataInputStream;
import java.io.FileDescriptor;
import java.io.StringReader;
import java.util.HashMap;
import org.evosuite.runtime.EvoRunner;
import org.evosuite.runtime.EvoRunnerParameters;
import org.evosuite.runtime.mock.java.io.MockFileInputStream;
import org.evosuite.runtime.mock.java.lang.MockRuntimeException;
import org.junit.runner.RunWith;
import org.mozilla.javascript.Kit;

@RunWith(EvoRunner.class) @EvoRunnerParameters(mockJVMNonDeterminism = true, useVFS = true, useVNET = true, resetStaticState = true, separateClassLoader = true, useJEE = true) 
public class Kit_ESTest extends Kit_ESTest_scaffolding {

  @Test(timeout = 4000)
  public void test00()  throws Throwable  {
      HashMap<Object, Object> hashMap0 = new HashMap<Object, Object>();
      Class<String> class0 = String.class;
      Object object0 = Kit.makeHashKeyFromPair("", "");
      Object object1 = hashMap0.getOrDefault(object0, class0);
      assertEquals("class java.lang.String", object1.toString());
  }

  @Test(timeout = 4000)
  public void test01()  throws Throwable  {
      int int0 = Kit.xDigitToInt(65, 65);
      assertEquals(1050, int0);
  }

  @Test(timeout = 4000)
  public void test02()  throws Throwable  {
      int int0 = Kit.xDigitToInt(62, 62);
      assertEquals((-1), int0);
  }

  @Test(timeout = 4000)
  public void test03()  throws Throwable  {
      int int0 = Kit.xDigitToInt(97, 97);
      assertEquals(1562, int0);
  }

  @Test(timeout = 4000)
  public void test04()  throws Throwable  {
      int int0 = Kit.xDigitToInt(4, 4);
      assertEquals((-1), int0);
  }

  @Test(timeout = 4000)
  public void test05()  throws Throwable  {
      ClassLoader classLoader0 = ClassLoader.getSystemClassLoader();
      boolean boolean0 = Kit.testIfCanLoadRhinoClasses(classLoader0);
      assertFalse(boolean0);
  }

  @Test(timeout = 4000)
  public void test06()  throws Throwable  {
      Integer integer0 = new Integer(56);
      FileDescriptor fileDescriptor0 = new FileDescriptor();
      MockFileInputStream mockFileInputStream0 = new MockFileInputStream(fileDescriptor0);
      Object object0 = Kit.addListener(integer0, mockFileInputStream0);
      Object object1 = Kit.addListener(object0, integer0);
      Integer integer1 = new Integer((byte) (-13));
      Object object2 = Kit.removeListener(object1, integer1);
      assertNotSame(object2, object0);
      assertNotNull(object2);
  }

  @Test(timeout = 4000)
  public void test07()  throws Throwable  {
      Object object0 = Kit.addListener("", "");
      Object object1 = Kit.removeListener(object0, "");
      assertNotNull(object1);
  }

  @Test(timeout = 4000)
  public void test08()  throws Throwable  {
      Object object0 = Kit.removeListener("", "");
      assertNull(object0);
  }

  @Test(timeout = 4000)
  public void test09()  throws Throwable  {
      Integer integer0 = new Integer((-250));
      FileDescriptor fileDescriptor0 = new FileDescriptor();
      MockFileInputStream mockFileInputStream0 = new MockFileInputStream(fileDescriptor0);
      Object object0 = Kit.addListener(integer0, mockFileInputStream0);
      Object object1 = Kit.removeListener(object0, integer0);
      assertSame(mockFileInputStream0, object1);
  }

  @Test(timeout = 4000)
  public void test10()  throws Throwable  {
      byte[] byteArray0 = new byte[16];
      ByteArrayInputStream byteArrayInputStream0 = new ByteArrayInputStream(byteArray0);
      DataInputStream dataInputStream0 = new DataInputStream(byteArrayInputStream0);
      byte[] byteArray1 = Kit.readStream(dataInputStream0, (byte)12);
      assertEquals(0, byteArrayInputStream0.available());
      assertEquals(16, byteArray1.length);
  }

  @Test(timeout = 4000)
  public void test11()  throws Throwable  {
      byte[] byteArray0 = new byte[3];
      ByteArrayInputStream byteArrayInputStream0 = new ByteArrayInputStream(byteArray0);
      // Undeclared exception!
      try { 
        Kit.readStream(byteArrayInputStream0, (byte) (-118));
        fail("Expecting exception: IllegalArgumentException");
      
      } catch(IllegalArgumentException e) {
         //
         // Bad initialBufferCapacity: -118
         //
         verifyException("org.mozilla.javascript.Kit", e);
      }
  }

  @Test(timeout = 4000)
  public void test12()  throws Throwable  {
      StringReader stringReader0 = new StringReader("&-");
      String string0 = Kit.readReader(stringReader0);
      assertEquals("&-", string0);
  }

  @Test(timeout = 4000)
  public void test13()  throws Throwable  {
      Class<Integer> class0 = Integer.class;
      Object object0 = Kit.newInstanceOrNull(class0);
      assertNull(object0);
  }

  @Test(timeout = 4000)
  public void test14()  throws Throwable  {
      ClassLoader classLoader0 = ClassLoader.getSystemClassLoader();
      HashMap<Object, Object> hashMap0 = new HashMap<Object, Object>();
      hashMap0.put("&-", classLoader0);
      Object object0 = Kit.initHash(hashMap0, "&-", "&-");
      assertNotNull(object0);
  }

  @Test(timeout = 4000)
  public void test15()  throws Throwable  {
      HashMap<Object, Object> hashMap0 = new HashMap<Object, Object>();
      Kit.initHash(hashMap0, hashMap0, "");
      assertFalse(hashMap0.isEmpty());
      assertEquals(1, hashMap0.size());
  }

  @Test(timeout = 4000)
  public void test16()  throws Throwable  {
      MockRuntimeException mockRuntimeException0 = new MockRuntimeException("org.mozilla.javascript.Kit");
      RuntimeException runtimeException0 = Kit.initCause(mockRuntimeException0, mockRuntimeException0);
      assertSame(mockRuntimeException0, runtimeException0);
  }

  @Test(timeout = 4000)
  public void test17()  throws Throwable  {
      RuntimeException runtimeException0 = Kit.initCause((RuntimeException) null, (Throwable) null);
      assertNull(runtimeException0);
  }

  @Test(timeout = 4000)
  public void test18()  throws Throwable  {
      Object object0 = Kit.addListener("", "");
      Object object1 = Kit.getListener(object0, (byte)2);
      assertNull(object1);
  }

  @Test(timeout = 4000)
  public void test19()  throws Throwable  {
      Object object0 = Kit.getListener("", 1);
      assertNull(object0);
  }

  @Test(timeout = 4000)
  public void test20()  throws Throwable  {
      byte[] byteArray0 = new byte[2];
      ByteArrayInputStream byteArrayInputStream0 = new ByteArrayInputStream(byteArray0, (byte)1, (byte)1);
      Object object0 = Kit.addListener(byteArrayInputStream0, byteArrayInputStream0);
      Object object1 = Kit.getListener(object0, (byte)1);
      assertSame(object1, byteArrayInputStream0);
  }

  @Test(timeout = 4000)
  public void test21()  throws Throwable  {
      Object object0 = Kit.getListener("X?:~/FiX_&ATP", 0);
      assertEquals("X?:~/FiX_&ATP", object0);
  }

  @Test(timeout = 4000)
  public void test22()  throws Throwable  {
      Object object0 = Kit.getListener((Object) null, 0);
      assertNull(object0);
  }

  @Test(timeout = 4000)
  public void test23()  throws Throwable  {
      Integer integer0 = new Integer((-250));
      FileDescriptor fileDescriptor0 = new FileDescriptor();
      MockFileInputStream mockFileInputStream0 = new MockFileInputStream(fileDescriptor0);
      Object object0 = Kit.addListener(integer0, mockFileInputStream0);
      // Undeclared exception!
      try { 
        Kit.getListener(object0, (-250));
        fail("Expecting exception: ArrayIndexOutOfBoundsException");
      
      } catch(ArrayIndexOutOfBoundsException e) {
         //
         // -250
         //
         verifyException("org.mozilla.javascript.Kit", e);
      }
  }

  @Test(timeout = 4000)
  public void test24()  throws Throwable  {
      try { 
        Kit.codeBug("");
        fail("Expecting exception: IllegalStateException");
      
      } catch(IllegalStateException e) {
         //
         // FAILED ASSERTION: 
         //
         verifyException("org.mozilla.javascript.Kit", e);
      }
  }

  @Test(timeout = 4000)
  public void test25()  throws Throwable  {
      try { 
        Kit.codeBug();
        fail("Expecting exception: IllegalStateException");
      
      } catch(IllegalStateException e) {
         //
         // FAILED ASSERTION
         //
         verifyException("org.mozilla.javascript.Kit", e);
      }
  }

  @Test(timeout = 4000)
  public void test26()  throws Throwable  {
      Class<?> class0 = Kit.classOrNull("P");
      assertNull(class0);
  }

  @Test(timeout = 4000)
  public void test27()  throws Throwable  {
      ClassLoader classLoader0 = ClassLoader.getSystemClassLoader();
      Class<?> class0 = Kit.classOrNull(classLoader0, "org/mozilla/javascript/BaseFunction");
      assertNull(class0);
  }

  @Test(timeout = 4000)
  public void test28()  throws Throwable  {
      ClassLoader classLoader0 = ClassLoader.getSystemClassLoader();
      Class<?> class0 = Kit.classOrNull(classLoader0, "mR|F\"Ke4@nG[gj|xL1p");
      assertNull(class0);
  }

  @Test(timeout = 4000)
  public void test29()  throws Throwable  {
      Integer integer0 = new Integer((-250));
      FileDescriptor fileDescriptor0 = new FileDescriptor();
      MockFileInputStream mockFileInputStream0 = new MockFileInputStream(fileDescriptor0);
      Object object0 = Kit.addListener(integer0, mockFileInputStream0);
      Object object1 = Kit.addListener(object0, integer0);
      Object object2 = Kit.removeListener(object1, integer0);
      assertFalse(object2.equals((Object)object1));
  }

  @Test(timeout = 4000)
  public void test30()  throws Throwable  {
      Object object0 = Kit.addListener((Object) null, "");
      assertEquals("", object0);
  }

  @Test(timeout = 4000)
  public void test31()  throws Throwable  {
      Object object0 = Kit.addListener("", "");
      Object object1 = Kit.getListener(object0, (byte)0);
      assertEquals("", object1);
  }

  @Test(timeout = 4000)
  public void test32()  throws Throwable  {
      Kit kit0 = new Kit();
  }
}
