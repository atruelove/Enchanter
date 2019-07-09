/*
 * This file was automatically generated by EvoSuite
 * Thu Aug 02 05:10:32 GMT 2018
 */

package org.mozilla.classfile;

import org.junit.Test;
import static org.junit.Assert.*;
import static org.evosuite.runtime.EvoAssertions.*;
import org.evosuite.runtime.EvoRunner;
import org.evosuite.runtime.EvoRunnerParameters;
import org.junit.runner.RunWith;
import org.mozilla.classfile.ClassFileMethod;

@RunWith(EvoRunner.class) @EvoRunnerParameters(mockJVMNonDeterminism = true, useVFS = true, useVNET = true, resetStaticState = true, separateClassLoader = true, useJEE = true) 
public class ClassFileMethod_ESTest extends ClassFileMethod_ESTest_scaffolding {

  @Test(timeout = 4000)
  public void test0()  throws Throwable  {
      ClassFileMethod classFileMethod0 = new ClassFileMethod("", (short) (-518), "14g%.S_8c=4", (short)736, (short) (-518));
      byte[] byteArray0 = new byte[9];
      // Undeclared exception!
      try { 
        classFileMethod0.write(byteArray0, 0);
        fail("Expecting exception: NullPointerException");
      
      } catch(NullPointerException e) {
         //
         // no message in exception (getMessage() returned null)
         //
         verifyException("org.mozilla.classfile.ClassFileMethod", e);
      }
  }

  @Test(timeout = 4000)
  public void test1()  throws Throwable  {
      ClassFileMethod classFileMethod0 = new ClassFileMethod((String) null, (short)1802, (String) null, (short)1802, (short)1034);
      // Undeclared exception!
      try { 
        classFileMethod0.getWriteSize();
        fail("Expecting exception: NullPointerException");
      
      } catch(NullPointerException e) {
         //
         // no message in exception (getMessage() returned null)
         //
         verifyException("org.mozilla.classfile.ClassFileMethod", e);
      }
  }

  @Test(timeout = 4000)
  public void test2()  throws Throwable  {
      ClassFileMethod classFileMethod0 = new ClassFileMethod("9", (short) (-1), (String) null, (short) (-1), (short) (-1));
      String string0 = classFileMethod0.getType();
      assertNull(string0);
  }

  @Test(timeout = 4000)
  public void test3()  throws Throwable  {
      ClassFileMethod classFileMethod0 = new ClassFileMethod("N tPBUd,OIOQX\"", (short) (-417), "N tPBUd,OIOQX\"", (short)1036, (short)1036);
      String string0 = classFileMethod0.getName();
      assertEquals("N tPBUd,OIOQX\"", string0);
  }

  @Test(timeout = 4000)
  public void test4()  throws Throwable  {
      ClassFileMethod classFileMethod0 = new ClassFileMethod("C'W[.y%4ZsV,kVjn", (short)2435, "C'W[.y%4ZsV,kVjn", (short) (-1), (short)0);
      short short0 = classFileMethod0.getFlags();
      assertEquals((short)0, short0);
  }

  @Test(timeout = 4000)
  public void test5()  throws Throwable  {
      ClassFileMethod classFileMethod0 = new ClassFileMethod("", (short) (-518), "14g%.S_8c=4", (short)736, (short) (-518));
      byte[] byteArray0 = new byte[1];
      classFileMethod0.setCodeAttribute(byteArray0);
      byte[] byteArray1 = new byte[9];
      int int0 = classFileMethod0.write(byteArray1, 0);
      assertEquals(9, int0);
      assertArrayEquals(new byte[] {(byte) (-3), (byte) (-6), (byte) (-3), (byte) (-6), (byte)2, (byte) (-32), (byte)0, (byte)1, (byte)0}, byteArray1);
  }
}
