/*
 * This file was automatically generated by EvoSuite
 * Tue Jul 31 15:43:06 GMT 2018
 */

package org.mozilla.javascript.xmlimpl;

import org.junit.Test;
import static org.junit.Assert.*;
import static org.evosuite.shaded.org.mockito.Mockito.*;
import static org.evosuite.runtime.EvoAssertions.*;
import org.evosuite.runtime.EvoRunner;
import org.evosuite.runtime.EvoRunnerParameters;
import org.evosuite.runtime.ViolatedAssumptionAnswer;
import org.junit.runner.RunWith;
import org.mozilla.javascript.Context;
import org.mozilla.javascript.ContextFactory;
import org.mozilla.javascript.NativeArray;
import org.mozilla.javascript.NativeWith;
import org.mozilla.javascript.Scriptable;
import org.mozilla.javascript.ScriptableObject;
import org.mozilla.javascript.Undefined;
import org.mozilla.javascript.typedarrays.NativeArrayBuffer;
import org.mozilla.javascript.typedarrays.NativeInt16Array;
import org.mozilla.javascript.typedarrays.NativeInt32Array;
import org.mozilla.javascript.xml.XMLObject;
import org.mozilla.javascript.xmlimpl.XML;
import org.mozilla.javascript.xmlimpl.XMLLibImpl;
import org.mozilla.javascript.xmlimpl.XMLList;
import org.mozilla.javascript.xmlimpl.XMLName;
import org.mozilla.javascript.xmlimpl.XMLObjectImpl;
import org.mozilla.javascript.xmlimpl.XmlNode;
import org.mozilla.javascript.xmlimpl.XmlProcessor;

@RunWith(EvoRunner.class) @EvoRunnerParameters(mockJVMNonDeterminism = true, useVFS = true, useVNET = true, resetStaticState = true, separateClassLoader = false, useJEE = true) 
public class XMLList_ESTest extends XMLList_ESTest_scaffolding {

  @Test(timeout = 4000)
  public void test00()  throws Throwable  {
      XMLLibImpl xMLLibImpl0 = mock(XMLLibImpl.class, new ViolatedAssumptionAnswer());
      XmlProcessor xmlProcessor0 = new XmlProcessor();
      XmlNode xmlNode0 = XmlNode.createText(xmlProcessor0, "org.mozilla.javascript.xmlimpl.XMLList");
      XML xML0 = new XML(xMLLibImpl0, (Scriptable) null, (XMLObject) null, xmlNode0);
      XMLList xMLList0 = xML0.comments();
      XMLList xMLList1 = (XMLList)xMLList0.valueOf();
      assertEquals("xml", xMLList1.getTypeOf());
  }

  @Test(timeout = 4000)
  public void test01()  throws Throwable  {
      XMLLibImpl xMLLibImpl0 = mock(XMLLibImpl.class, new ViolatedAssumptionAnswer());
      XmlProcessor xmlProcessor0 = new XmlProcessor();
      XmlNode xmlNode0 = XmlNode.createText(xmlProcessor0, "org.mozilla.javascript.xmlimpl.XMLList");
      XML xML0 = new XML(xMLLibImpl0, (Scriptable) null, (XMLObject) null, xmlNode0);
      XMLList xMLList0 = xML0.comments();
      xMLList0.put(557, (Scriptable) xML0, (Object) xML0);
      // Undeclared exception!
      try { 
        xMLList0.toXMLString();
        fail("Expecting exception: NullPointerException");
      
      } catch(NullPointerException e) {
         //
         // no message in exception (getMessage() returned null)
         //
         verifyException("org.mozilla.javascript.xmlimpl.XMLList", e);
      }
  }

  @Test(timeout = 4000)
  public void test02()  throws Throwable  {
      XMLLibImpl xMLLibImpl0 = mock(XMLLibImpl.class, new ViolatedAssumptionAnswer());
      XmlProcessor xmlProcessor0 = new XmlProcessor();
      XmlNode xmlNode0 = XmlNode.createText(xmlProcessor0, "org.mozilla.javascript.xmlimpl.XMLList");
      XML xML0 = new XML(xMLLibImpl0, (Scriptable) null, (XMLObject) null, xmlNode0);
      XMLList xMLList0 = xML0.comments();
      String string0 = xMLList0.toSource((-2604));
      assertEquals("", string0);
  }

  @Test(timeout = 4000)
  public void test03()  throws Throwable  {
      XMLLibImpl xMLLibImpl0 = mock(XMLLibImpl.class, new ViolatedAssumptionAnswer());
      XmlProcessor xmlProcessor0 = new XmlProcessor();
      XmlNode xmlNode0 = XmlNode.createText(xmlProcessor0, "org.mozilla.javascript.xmlimpl.XMLList");
      XML xML0 = new XML(xMLLibImpl0, (Scriptable) null, (XMLObject) null, xmlNode0);
      XMLList xMLList0 = xML0.comments();
      xMLList0.put(557, (Scriptable) xML0, (Object) xML0);
      XMLList xMLList1 = xMLList0.text();
      assertNotSame(xMLList1, xMLList0);
  }

  @Test(timeout = 4000)
  public void test04()  throws Throwable  {
      XMLLibImpl xMLLibImpl0 = mock(XMLLibImpl.class, new ViolatedAssumptionAnswer());
      XmlProcessor xmlProcessor0 = new XmlProcessor();
      XmlNode xmlNode0 = XmlNode.createText(xmlProcessor0, "org.mozilla.javascript.xmlimpl.XMLList");
      XML xML0 = new XML(xMLLibImpl0, (Scriptable) null, (XMLObject) null, xmlNode0);
      XMLList xMLList0 = xML0.comments();
      xMLList0.put(557, (Scriptable) xML0, (Object) xML0);
      xMLList0.remove();
      assertEquals("xml", xMLList0.getTypeOf());
  }

  @Test(timeout = 4000)
  public void test05()  throws Throwable  {
      XMLName xMLName0 = XMLName.create("TX=A(pd%|L", "TX=A(pd%|L");
      XMLLibImpl xMLLibImpl0 = mock(XMLLibImpl.class, new ViolatedAssumptionAnswer());
      XmlProcessor xmlProcessor0 = new XmlProcessor();
      XmlNode xmlNode0 = XmlNode.createEmpty(xmlProcessor0);
      XML xML0 = new XML(xMLLibImpl0, (Scriptable) null, (XMLObject) null, xmlNode0);
      XMLList xMLList0 = xML0.comments();
      Short short0 = new Short((short)0);
      xMLList0.replace((-1), xML0);
      xMLList0.putXMLProperty(xMLName0, short0);
      assertEquals("XMLList", xMLList0.getClassName());
  }

  @Test(timeout = 4000)
  public void test06()  throws Throwable  {
      XMLName xMLName0 = XMLName.create("3Q=(pd%|L", "*=");
      XMLLibImpl xMLLibImpl0 = mock(XMLLibImpl.class, new ViolatedAssumptionAnswer());
      XmlProcessor xmlProcessor0 = new XmlProcessor();
      XmlNode xmlNode0 = XmlNode.createText(xmlProcessor0, "*=");
      XML xML0 = new XML(xMLLibImpl0, (Scriptable) null, (XMLObject) null, xmlNode0);
      XMLList xMLList0 = xML0.elements(xMLName0);
      Short short0 = new Short((short)0);
      // Undeclared exception!
      try { 
        xMLList0.putXMLProperty(xMLName0, short0);
        fail("Expecting exception: NullPointerException");
      
      } catch(NullPointerException e) {
         //
         // no message in exception (getMessage() returned null)
         //
         verifyException("org.mozilla.javascript.xmlimpl.XmlNode", e);
      }
  }

  @Test(timeout = 4000)
  public void test07()  throws Throwable  {
      XMLLibImpl xMLLibImpl0 = mock(XMLLibImpl.class, new ViolatedAssumptionAnswer());
      XmlProcessor xmlProcessor0 = new XmlProcessor();
      XmlNode xmlNode0 = XmlNode.createText(xmlProcessor0, "org.mozilla.javascript.xmlimpl.XMLList");
      XML xML0 = new XML(xMLLibImpl0, (Scriptable) null, (XMLObject) null, xmlNode0);
      XMLList xMLList0 = xML0.children();
      xMLList0.addToList(xML0);
      XMLName xMLName0 = XMLName.create("", "");
      xMLList0.put(2386, (Scriptable) xMLList0, (Object) null);
      // Undeclared exception!
      try { 
        xMLList0.putXMLProperty(xMLName0, "yEj }^m/fHj");
        fail("Expecting exception: RuntimeException");
      
      } catch(RuntimeException e) {
         //
         // TypeError: Assignment to lists with more than one item is not supported
         //
         verifyException("org.mozilla.javascript.ScriptRuntime", e);
      }
  }

  @Test(timeout = 4000)
  public void test08()  throws Throwable  {
      XMLName xMLName0 = XMLName.create("3Q=(pd%|L", "org.mozilla.javascript.xmlimpl.XMLList");
      XMLLibImpl xMLLibImpl0 = mock(XMLLibImpl.class, new ViolatedAssumptionAnswer());
      XmlProcessor xmlProcessor0 = new XmlProcessor();
      XmlNode xmlNode0 = XmlNode.createText(xmlProcessor0, "org.mozilla.javascript.xmlimpl.XMLList");
      XML xML0 = new XML(xMLLibImpl0, (Scriptable) null, (XMLObject) null, xmlNode0);
      XMLList xMLList0 = xML0.comments();
      // Undeclared exception!
      try { 
        xMLList0.putXMLProperty(xMLName0, (Object) null);
        fail("Expecting exception: RuntimeException");
      
      } catch(RuntimeException e) {
         //
         // TypeError: Assignment to empty XMLList without targets not supported
         //
         verifyException("org.mozilla.javascript.ScriptRuntime", e);
      }
  }

  @Test(timeout = 4000)
  public void test09()  throws Throwable  {
      XMLName xMLName0 = XMLName.create("3Q=(pd%|L", "org.mozilla.javascript.xmlimpl.XMLList");
      XMLLibImpl xMLLibImpl0 = mock(XMLLibImpl.class, new ViolatedAssumptionAnswer());
      XmlProcessor xmlProcessor0 = new XmlProcessor();
      XmlNode xmlNode0 = XmlNode.createText(xmlProcessor0, "org.mozilla.javascript.xmlimpl.XMLList");
      XML xML0 = new XML(xMLLibImpl0, (Scriptable) null, (XMLObject) null, xmlNode0);
      XMLList xMLList0 = xML0.elements(xMLName0);
      xMLList0.put(0, (Scriptable) xML0, (Object) xML0);
      assertEquals("XML", xML0.getClassName());
  }

  @Test(timeout = 4000)
  public void test10()  throws Throwable  {
      XMLLibImpl xMLLibImpl0 = mock(XMLLibImpl.class, new ViolatedAssumptionAnswer());
      XmlProcessor xmlProcessor0 = new XmlProcessor();
      XmlNode xmlNode0 = XmlNode.createText(xmlProcessor0, "org.mozilla.javascript.xmlimpl.XMLList");
      XML xML0 = new XML(xMLLibImpl0, (Scriptable) null, (XMLObject) null, xmlNode0);
      XMLList xMLList0 = xML0.comments();
      // Undeclared exception!
      try { 
        xMLList0.put((-1733774069), (Scriptable) xML0, (Object) xML0);
        fail("Expecting exception: NullPointerException");
      
      } catch(NullPointerException e) {
         //
         // no message in exception (getMessage() returned null)
         //
         verifyException("org.mozilla.javascript.xmlimpl.XMLList", e);
      }
  }

  @Test(timeout = 4000)
  public void test11()  throws Throwable  {
      XMLName xMLName0 = XMLName.create("3Q=(pd%|L", "org.mozilla.javascript.xmlimpl.XMLList");
      XMLLibImpl xMLLibImpl0 = mock(XMLLibImpl.class, new ViolatedAssumptionAnswer());
      XmlProcessor xmlProcessor0 = new XmlProcessor();
      XmlNode xmlNode0 = XmlNode.createElement(xmlProcessor0, "3Q=(pd%|L", "3Q=(pd%|L");
      XML xML0 = new XML(xMLLibImpl0, (Scriptable) null, (XMLObject) null, xmlNode0);
      XMLList xMLList0 = xML0.comments();
      XMLList xMLList1 = xML0.elements(xMLName0);
      // Undeclared exception!
      try { 
        xMLList1.put((-37), (Scriptable) xMLList0, (Object) "slice");
        fail("Expecting exception: NullPointerException");
      
      } catch(NullPointerException e) {
         //
         // no message in exception (getMessage() returned null)
         //
         verifyException("org.mozilla.javascript.xmlimpl.XmlNode", e);
      }
  }

  @Test(timeout = 4000)
  public void test12()  throws Throwable  {
      XMLLibImpl xMLLibImpl0 = mock(XMLLibImpl.class, new ViolatedAssumptionAnswer());
      XmlProcessor xmlProcessor0 = new XmlProcessor();
      XmlNode xmlNode0 = XmlNode.createText(xmlProcessor0, "org.mozilla.javascript.xmlimpl.XMLList");
      XML xML0 = new XML(xMLLibImpl0, (Scriptable) null, (XMLObject) null, xmlNode0);
      XMLList xMLList0 = xML0.comments();
      Context context0 = Context.getCurrentContext();
      Object object0 = xMLList0.parent();
      // Undeclared exception!
      try { 
        xMLList0.put(4, ((Undefined) object0).SCRIPTABLE_UNDEFINED, (Object) context0);
        fail("Expecting exception: NullPointerException");
      
      } catch(NullPointerException e) {
         //
         // no message in exception (getMessage() returned null)
         //
         verifyException("org.mozilla.javascript.xmlimpl.XmlNode", e);
      }
  }

  @Test(timeout = 4000)
  public void test13()  throws Throwable  {
      XMLLibImpl xMLLibImpl0 = mock(XMLLibImpl.class, new ViolatedAssumptionAnswer());
      XmlProcessor xmlProcessor0 = new XmlProcessor();
      XmlNode xmlNode0 = XmlNode.createText(xmlProcessor0, "org.mozilla.javascript.xmlimpl.XMLList");
      XML xML0 = new XML(xMLLibImpl0, (Scriptable) null, (XMLObject) null, xmlNode0);
      XMLList xMLList0 = xML0.comments();
      Float float0 = new Float(1935.2712F);
      boolean boolean0 = xMLList0.propertyIsEnumerable(float0);
      assertFalse(boolean0);
  }

  @Test(timeout = 4000)
  public void test14()  throws Throwable  {
      XMLLibImpl xMLLibImpl0 = mock(XMLLibImpl.class, new ViolatedAssumptionAnswer());
      XmlProcessor xmlProcessor0 = new XmlProcessor();
      XmlNode xmlNode0 = XmlNode.createText(xmlProcessor0, "org.mozilla.javascript.xmlimpl.XMLList");
      XML xML0 = new XML(xMLLibImpl0, (Scriptable) null, (XMLObject) null, xmlNode0);
      XMLList xMLList0 = xML0.comments();
      Byte byte0 = new Byte((byte)0);
      boolean boolean0 = xMLList0.propertyIsEnumerable(byte0);
      assertFalse(boolean0);
  }

  @Test(timeout = 4000)
  public void test15()  throws Throwable  {
      XMLLibImpl xMLLibImpl0 = mock(XMLLibImpl.class, new ViolatedAssumptionAnswer());
      XmlProcessor xmlProcessor0 = new XmlProcessor();
      XmlNode xmlNode0 = XmlNode.createText(xmlProcessor0, "org.mozilla.javascript.xmlimpl.XMLList");
      XML xML0 = new XML(xMLLibImpl0, (Scriptable) null, (XMLObject) null, xmlNode0);
      XMLList xMLList0 = xML0.children();
      boolean boolean0 = xMLList0.propertyIsEnumerable(xmlProcessor0);
      assertFalse(boolean0);
  }

  @Test(timeout = 4000)
  public void test16()  throws Throwable  {
      XMLName xMLName0 = XMLName.create("3Q=(pd%|L", "org.mozilla.javascript.xmlimpl.XMLList");
      XMLLibImpl xMLLibImpl0 = mock(XMLLibImpl.class, new ViolatedAssumptionAnswer());
      XmlProcessor xmlProcessor0 = new XmlProcessor();
      XmlNode xmlNode0 = XmlNode.createText(xmlProcessor0, "org.mozilla.javascript.xmlimpl.XMLList");
      XML xML0 = new XML(xMLLibImpl0, (Scriptable) null, (XMLObject) null, xmlNode0);
      XMLList xMLList0 = xML0.comments();
      xMLList0.put(557, (Scriptable) xML0, (Object) xML0);
      XMLList xMLList1 = xMLList0.processingInstructions(xMLName0);
      assertNotSame(xMLList1, xMLList0);
  }

  @Test(timeout = 4000)
  public void test17()  throws Throwable  {
      XMLLibImpl xMLLibImpl0 = mock(XMLLibImpl.class, new ViolatedAssumptionAnswer());
      XmlProcessor xmlProcessor0 = new XmlProcessor();
      XmlNode xmlNode0 = XmlNode.createText(xmlProcessor0, "org.mozilla.javascript.xmlimpl.XMLList");
      XML xML0 = new XML(xMLLibImpl0, (Scriptable) null, (XMLObject) null, xmlNode0);
      XMLList xMLList0 = xML0.comments();
      xMLList0.put(557, (Scriptable) xML0, (Object) xML0);
      xMLList0.normalize();
      assertFalse(xMLList0.hasPrototypeMap());
  }

  @Test(timeout = 4000)
  public void test18()  throws Throwable  {
      XMLLibImpl xMLLibImpl0 = mock(XMLLibImpl.class, new ViolatedAssumptionAnswer());
      XMLList xMLList0 = new XMLList(xMLLibImpl0, (Scriptable) null, (XMLObject) null);
      Object[] objectArray0 = new Object[4];
      objectArray0[0] = (Object) xMLList0;
      Object object0 = xMLList0.jsConstructor((Context) null, false, objectArray0);
      assertSame(object0, xMLList0);
  }

  @Test(timeout = 4000)
  public void test19()  throws Throwable  {
      XMLLibImpl xMLLibImpl0 = mock(XMLLibImpl.class, new ViolatedAssumptionAnswer());
      XmlProcessor xmlProcessor0 = new XmlProcessor();
      XmlNode xmlNode0 = XmlNode.createText(xmlProcessor0, "3Q=(pd%|L");
      XML xML0 = new XML(xMLLibImpl0, (Scriptable) null, (XMLObject) null, xmlNode0);
      XMLList xMLList0 = xML0.comments();
      Context context0 = Context.getCurrentContext();
      Object object0 = xMLList0.jsConstructor(context0, false, context0.emptyArgs);
      assertNotSame(object0, xMLList0);
  }

  @Test(timeout = 4000)
  public void test20()  throws Throwable  {
      XMLLibImpl xMLLibImpl0 = mock(XMLLibImpl.class, new ViolatedAssumptionAnswer());
      XmlProcessor xmlProcessor0 = new XmlProcessor();
      XmlNode xmlNode0 = XmlNode.createEmpty(xmlProcessor0);
      XML xML0 = new XML(xMLLibImpl0, (Scriptable) null, (XMLObject) null, xmlNode0);
      XMLList xMLList0 = xML0.comments();
      Object[] objectArray0 = new Object[9];
      XMLList xMLList1 = (XMLList)xMLList0.jsConstructor((Context) null, false, objectArray0);
      assertFalse(xMLList1.avoidObjectDetection());
  }

  @Test(timeout = 4000)
  public void test21()  throws Throwable  {
      XMLLibImpl xMLLibImpl0 = mock(XMLLibImpl.class, new ViolatedAssumptionAnswer());
      XmlProcessor xmlProcessor0 = new XmlProcessor();
      XmlNode xmlNode0 = XmlNode.createText(xmlProcessor0, "org.mozilla.javascript.xmlimpl.XMLList");
      XML xML0 = new XML(xMLLibImpl0, (Scriptable) null, (XMLObject) null, xmlNode0);
      XMLList xMLList0 = xML0.children();
      xMLList0.addToList(xML0);
      boolean boolean0 = XMLName.accept(xMLList0);
      assertTrue(boolean0);
  }

  @Test(timeout = 4000)
  public void test22()  throws Throwable  {
      XMLName xMLName0 = XMLName.create("63t=)\"z54}~Ocq", "org.mozilla.javascript.xmlimpl.XMLList");
      XMLLibImpl xMLLibImpl0 = mock(XMLLibImpl.class, new ViolatedAssumptionAnswer());
      XmlProcessor xmlProcessor0 = new XmlProcessor();
      XmlNode xmlNode0 = XmlNode.createText(xmlProcessor0, "org.mozilla.javascript.xmlimpl.XMLList");
      XML xML0 = new XML(xMLLibImpl0, (Scriptable) null, (XMLObject) null, xmlNode0);
      XMLList xMLList0 = xML0.comments();
      boolean boolean0 = xMLList0.hasOwnProperty(xMLName0);
      assertFalse(boolean0);
  }

  @Test(timeout = 4000)
  public void test23()  throws Throwable  {
      XMLLibImpl xMLLibImpl0 = mock(XMLLibImpl.class, new ViolatedAssumptionAnswer());
      XmlProcessor xmlProcessor0 = new XmlProcessor();
      XmlNode xmlNode0 = XmlNode.createText(xmlProcessor0, "3Q=(pd%|L");
      XML xML0 = new XML(xMLLibImpl0, (Scriptable) null, (XMLObject) null, xmlNode0);
      XMLList xMLList0 = xML0.comments();
      xMLList0.put(557, (Scriptable) xML0, (Object) xML0);
      boolean boolean0 = xMLList0.hasComplexContent();
      assertFalse(boolean0);
  }

  @Test(timeout = 4000)
  public void test24()  throws Throwable  {
      XMLLibImpl xMLLibImpl0 = mock(XMLLibImpl.class, new ViolatedAssumptionAnswer());
      XmlProcessor xmlProcessor0 = new XmlProcessor();
      XmlNode xmlNode0 = XmlNode.createText(xmlProcessor0, "3Q=(pd%|L");
      XML xML0 = new XML(xMLLibImpl0, (Scriptable) null, (XMLObject) null, xmlNode0);
      XMLList xMLList0 = xML0.comments();
      boolean boolean0 = xMLList0.hasComplexContent();
      assertFalse(boolean0);
  }

  @Test(timeout = 4000)
  public void test25()  throws Throwable  {
      XMLLibImpl xMLLibImpl0 = mock(XMLLibImpl.class, new ViolatedAssumptionAnswer());
      XmlProcessor xmlProcessor0 = new XmlProcessor();
      XmlNode xmlNode0 = XmlNode.createElement(xmlProcessor0, "-j%BS/+y", "=U");
      XML xML0 = new XML(xMLLibImpl0, (Scriptable) null, (XMLObject) null, xmlNode0);
      XMLList xMLList0 = xML0.comments();
      boolean boolean0 = ScriptableObject.deleteProperty((Scriptable) xMLList0, 0);
      assertTrue(boolean0);
  }

  @Test(timeout = 4000)
  public void test26()  throws Throwable  {
      XMLLibImpl xMLLibImpl0 = mock(XMLLibImpl.class, new ViolatedAssumptionAnswer());
      NativeInt32Array nativeInt32Array0 = new NativeInt32Array();
      XmlProcessor xmlProcessor0 = new XmlProcessor();
      XmlNode xmlNode0 = XmlNode.createEmpty(xmlProcessor0);
      XML xML0 = new XML(xMLLibImpl0, nativeInt32Array0, (XMLObject) null, xmlNode0);
      XMLName xMLName0 = XMLName.formStar();
      XMLList xMLList0 = xML0.child(xMLName0);
      Object object0 = xMLList0.getXMLProperty(xMLName0);
      assertNotSame(object0, xMLList0);
  }

  @Test(timeout = 4000)
  public void test27()  throws Throwable  {
      XMLLibImpl xMLLibImpl0 = mock(XMLLibImpl.class, new ViolatedAssumptionAnswer());
      XmlProcessor xmlProcessor0 = new XmlProcessor();
      XmlNode xmlNode0 = XmlNode.createEmpty(xmlProcessor0);
      XML xML0 = new XML(xMLLibImpl0, (Scriptable) null, (XMLObject) null, xmlNode0);
      XMLList xMLList0 = xML0.comments();
      XML xML1 = xMLList0.getXML();
      assertNull(xML1);
  }

  @Test(timeout = 4000)
  public void test28()  throws Throwable  {
      XMLName xMLName0 = XMLName.create("TX=A(pd%|L", "TX=A(pd%|L");
      XMLLibImpl xMLLibImpl0 = mock(XMLLibImpl.class, new ViolatedAssumptionAnswer());
      XmlProcessor xmlProcessor0 = new XmlProcessor();
      XmlNode xmlNode0 = XmlNode.createEmpty(xmlProcessor0);
      XML xML0 = new XML(xMLLibImpl0, (Scriptable) null, (XMLObject) null, xmlNode0);
      XMLList xMLList0 = xML0.comments();
      xMLList0.replace((-1), xML0);
      boolean boolean0 = xMLList0.hasXMLProperty(xMLName0);
      assertFalse(boolean0);
  }

  @Test(timeout = 4000)
  public void test29()  throws Throwable  {
      XMLName xMLName0 = XMLName.create("", "");
      XMLLibImpl xMLLibImpl0 = mock(XMLLibImpl.class, new ViolatedAssumptionAnswer());
      NativeArray nativeArray0 = new NativeArray(0L);
      XMLList xMLList0 = new XMLList(xMLLibImpl0, nativeArray0, (XMLObject) null);
      XMLLibImpl xMLLibImpl1 = mock(XMLLibImpl.class, new ViolatedAssumptionAnswer());
      NativeArrayBuffer nativeArrayBuffer0 = new NativeArrayBuffer(4);
      NativeInt32Array nativeInt32Array0 = new NativeInt32Array(nativeArrayBuffer0, (-446), 130);
      xMLList0.initialize(xMLLibImpl1, nativeInt32Array0, xMLList0);
      boolean boolean0 = xMLList0.hasOwnProperty(xMLName0);
      assertFalse(boolean0);
  }

  @Test(timeout = 4000)
  public void test30()  throws Throwable  {
      XMLLibImpl xMLLibImpl0 = mock(XMLLibImpl.class, new ViolatedAssumptionAnswer());
      NativeArray nativeArray0 = new NativeArray(0L);
      XMLList xMLList0 = new XMLList(xMLLibImpl0, nativeArray0, (XMLObject) null);
      XmlNode.InternalList xmlNode_InternalList0 = xMLList0.getNodeList();
      assertNotNull(xmlNode_InternalList0);
  }

  @Test(timeout = 4000)
  public void test31()  throws Throwable  {
      XMLLibImpl xMLLibImpl0 = mock(XMLLibImpl.class, new ViolatedAssumptionAnswer());
      XmlProcessor xmlProcessor0 = new XmlProcessor();
      XmlNode xmlNode0 = XmlNode.createElement(xmlProcessor0, "=U", "-j%BS/+y");
      XML xML0 = new XML(xMLLibImpl0, (Scriptable) null, (XMLObject) null, xmlNode0);
      XMLList xMLList0 = xML0.comments();
      Object[] objectArray0 = xMLList0.getIdsForDebug();
      assertEquals(0, objectArray0.length);
  }

  @Test(timeout = 4000)
  public void test32()  throws Throwable  {
      XMLLibImpl xMLLibImpl0 = mock(XMLLibImpl.class, new ViolatedAssumptionAnswer());
      NativeInt16Array nativeInt16Array0 = new NativeInt16Array();
      XmlProcessor xmlProcessor0 = new XmlProcessor();
      XmlNode xmlNode0 = XmlNode.createEmpty(xmlProcessor0);
      XML xML0 = new XML(xMLLibImpl0, nativeInt16Array0, (XMLObject) null, xmlNode0);
      XMLList xMLList0 = new XMLList(xMLLibImpl0, nativeInt16Array0, xML0);
      Object[] objectArray0 = xMLList0.getIds();
      assertEquals(0, objectArray0.length);
  }

  @Test(timeout = 4000)
  public void test33()  throws Throwable  {
      XMLLibImpl xMLLibImpl0 = mock(XMLLibImpl.class, new ViolatedAssumptionAnswer());
      XmlProcessor xmlProcessor0 = new XmlProcessor();
      XmlNode xmlNode0 = XmlNode.createText(xmlProcessor0, "org.mozilla.javascript.xmlimpl.XMLList");
      XML xML0 = new XML(xMLLibImpl0, (Scriptable) null, (XMLObject) null, xmlNode0);
      XMLList xMLList0 = xML0.comments();
      Context context0 = Context.getCurrentContext();
      xMLList0.put(557, (Scriptable) xML0, (Object) xML0);
      Scriptable scriptable0 = xMLList0.getExtraMethodSource(context0);
      assertSame(xML0, scriptable0);
  }

  @Test(timeout = 4000)
  public void test34()  throws Throwable  {
      XMLLibImpl xMLLibImpl0 = mock(XMLLibImpl.class, new ViolatedAssumptionAnswer());
      XmlProcessor xmlProcessor0 = new XmlProcessor();
      XmlNode xmlNode0 = XmlNode.createEmpty(xmlProcessor0);
      XML xML0 = new XML(xMLLibImpl0, (Scriptable) null, (XMLObject) null, xmlNode0);
      XMLList xMLList0 = xML0.comments();
      xMLList0.replace((-1), xML0);
      NativeWith nativeWith0 = xMLList0.enterDotQuery(xMLList0);
      assertEquals("With", nativeWith0.getClassName());
  }

  @Test(timeout = 4000)
  public void test35()  throws Throwable  {
      XMLName xMLName0 = XMLName.formProperty("call", "call");
      XMLLibImpl xMLLibImpl0 = mock(XMLLibImpl.class, new ViolatedAssumptionAnswer());
      NativeInt32Array nativeInt32Array0 = new NativeInt32Array();
      XmlProcessor xmlProcessor0 = new XmlProcessor();
      XmlNode xmlNode0 = XmlNode.createText(xmlProcessor0, "Assignment to empty XMLList without targets not supported");
      XML xML0 = new XML(xMLLibImpl0, nativeInt32Array0, (XMLObject) null, xmlNode0);
      XMLList xMLList0 = xMLName0.getMyValueOn(xML0);
      Class<Object> class0 = Object.class;
      Object object0 = ScriptableObject.getTypedProperty((Scriptable) xMLList0, (-2759), class0);
      assertNull(object0);
  }

  @Test(timeout = 4000)
  public void test36()  throws Throwable  {
      XMLLibImpl xMLLibImpl0 = mock(XMLLibImpl.class, new ViolatedAssumptionAnswer());
      XmlProcessor xmlProcessor0 = new XmlProcessor();
      XmlNode xmlNode0 = XmlNode.createText(xmlProcessor0, "org.mozilla.javascript.xmlimpl.XMLList");
      XML xML0 = new XML(xMLLibImpl0, (Scriptable) null, (XMLObject) null, xmlNode0);
      XMLList xMLList0 = xML0.comments();
      boolean boolean0 = xMLList0.equivalentXml(xMLList0);
      assertTrue(boolean0);
  }

  @Test(timeout = 4000)
  public void test37()  throws Throwable  {
      XMLLibImpl xMLLibImpl0 = mock(XMLLibImpl.class, new ViolatedAssumptionAnswer());
      XmlProcessor xmlProcessor0 = new XmlProcessor();
      XmlNode xmlNode0 = XmlNode.createEmpty(xmlProcessor0);
      XML xML0 = new XML(xMLLibImpl0, (Scriptable) null, (XMLObject) null, xmlNode0);
      XMLList xMLList0 = xML0.comments();
      xMLList0.replace((-1), xML0);
      boolean boolean0 = xMLList0.equivalentXml("slice");
      assertFalse(boolean0);
  }

  @Test(timeout = 4000)
  public void test38()  throws Throwable  {
      XMLLibImpl xMLLibImpl0 = mock(XMLLibImpl.class, new ViolatedAssumptionAnswer());
      XmlProcessor xmlProcessor0 = new XmlProcessor();
      XmlNode xmlNode0 = XmlNode.createText(xmlProcessor0, "org.mozilla.javascript.xmlimpl.XMLList");
      XML xML0 = new XML(xMLLibImpl0, (Scriptable) null, (XMLObject) null, xmlNode0);
      XMLList xMLList0 = xML0.comments();
      Object object0 = xMLList0.parent();
      boolean boolean0 = xMLList0.equivalentXml(object0);
      assertTrue(boolean0);
  }

  @Test(timeout = 4000)
  public void test39()  throws Throwable  {
      XMLLibImpl xMLLibImpl0 = mock(XMLLibImpl.class, new ViolatedAssumptionAnswer());
      XmlProcessor xmlProcessor0 = new XmlProcessor();
      XmlNode xmlNode0 = XmlNode.createText(xmlProcessor0, "org.mozilla.javascript.xmlimpl.XMLList");
      XML xML0 = new XML(xMLLibImpl0, (Scriptable) null, (XMLObject) null, xmlNode0);
      XMLList xMLList0 = xML0.children();
      xMLList0.addToList(xML0);
      XMLName xMLName0 = XMLName.create("", "");
      XMLList xMLList1 = xMLList0.elements(xMLName0);
      assertNotSame(xMLList1, xMLList0);
  }

  @Test(timeout = 4000)
  public void test40()  throws Throwable  {
      XMLName xMLName0 = XMLName.create("TX=A(pd%|L", "TX=A(pd%|L");
      XMLLibImpl xMLLibImpl0 = mock(XMLLibImpl.class, new ViolatedAssumptionAnswer());
      XmlProcessor xmlProcessor0 = new XmlProcessor();
      XmlNode xmlNode0 = XmlNode.createEmpty(xmlProcessor0);
      XML xML0 = new XML(xMLLibImpl0, (Scriptable) null, (XMLObject) null, xmlNode0);
      XMLList xMLList0 = xML0.comments();
      xMLList0.replace((-1), xML0);
      xMLList0.deleteXMLProperty(xMLName0);
      assertEquals("XMLList", xMLList0.getClassName());
  }

  @Test(timeout = 4000)
  public void test41()  throws Throwable  {
      XMLLibImpl xMLLibImpl0 = mock(XMLLibImpl.class, new ViolatedAssumptionAnswer());
      XmlProcessor xmlProcessor0 = new XmlProcessor();
      XmlNode xmlNode0 = XmlNode.createText(xmlProcessor0, "org.mozilla.javascript.xmlimpl.XMLList");
      XML xML0 = new XML(xMLLibImpl0, (Scriptable) null, (XMLObject) null, xmlNode0);
      XMLList xMLList0 = xML0.children();
      xMLList0.addToList(xML0);
      xMLList0.delete(0);
      assertEquals(1, ScriptableObject.READONLY);
  }

  @Test(timeout = 4000)
  public void test42()  throws Throwable  {
      XMLLibImpl xMLLibImpl0 = mock(XMLLibImpl.class, new ViolatedAssumptionAnswer());
      XmlProcessor xmlProcessor0 = new XmlProcessor();
      XmlNode xmlNode0 = XmlNode.createText(xmlProcessor0, "org.mozilla.javascript.xmlimpl.XMLList");
      XML xML0 = new XML(xMLLibImpl0, (Scriptable) null, (XMLObject) null, xmlNode0);
      XMLList xMLList0 = xML0.comments();
      xMLList0.put(557, (Scriptable) xML0, (Object) xML0);
      XMLObjectImpl xMLObjectImpl0 = xMLList0.copy();
      assertNotSame(xMLObjectImpl0, xMLList0);
  }

  @Test(timeout = 4000)
  public void test43()  throws Throwable  {
      XMLLibImpl xMLLibImpl0 = mock(XMLLibImpl.class, new ViolatedAssumptionAnswer());
      XmlProcessor xmlProcessor0 = new XmlProcessor();
      XmlNode xmlNode0 = XmlNode.createText(xmlProcessor0, "org.mozilla.javascript.xmlimpl.XMLList");
      XML xML0 = new XML(xMLLibImpl0, (Scriptable) null, (XMLObject) null, xmlNode0);
      XMLList xMLList0 = xML0.comments();
      xMLList0.put(557, (Scriptable) xML0, (Object) xML0);
      boolean boolean0 = xMLList0.contains((Object) null);
      assertFalse(boolean0);
  }

  @Test(timeout = 4000)
  public void test44()  throws Throwable  {
      XMLLibImpl xMLLibImpl0 = mock(XMLLibImpl.class, new ViolatedAssumptionAnswer());
      XmlProcessor xmlProcessor0 = new XmlProcessor();
      XmlNode xmlNode0 = XmlNode.createText(xmlProcessor0, "org.mozilla.javascript.xmlimpl.XMLList");
      XML xML0 = new XML(xMLLibImpl0, (Scriptable) null, (XMLObject) null, xmlNode0);
      XMLList xMLList0 = xML0.comments();
      ContextFactory contextFactory0 = ContextFactory.getGlobal();
      Context context0 = contextFactory0.enterContext();
      // Undeclared exception!
      try { 
        xMLList0.construct(context0, xML0, context0.emptyArgs);
        fail("Expecting exception: RuntimeException");
      
      } catch(RuntimeException e) {
         //
         // TypeError: \"XMLList\" is not a constructor.
         //
         verifyException("org.mozilla.javascript.ScriptRuntime", e);
      }
  }

  @Test(timeout = 4000)
  public void test45()  throws Throwable  {
      XMLLibImpl xMLLibImpl0 = mock(XMLLibImpl.class, new ViolatedAssumptionAnswer());
      XmlProcessor xmlProcessor0 = new XmlProcessor();
      XmlNode xmlNode0 = XmlNode.createText(xmlProcessor0, "org.mozilla.javascript.xmlimpl.XMLList");
      XML xML0 = new XML(xMLLibImpl0, (Scriptable) null, (XMLObject) null, xmlNode0);
      XMLList xMLList0 = xML0.comments();
      xMLList0.put(557, (Scriptable) xML0, (Object) xML0);
      XMLList xMLList1 = xMLList0.comments();
      assertNotSame(xMLList1, xMLList0);
  }

  @Test(timeout = 4000)
  public void test46()  throws Throwable  {
      XMLLibImpl xMLLibImpl0 = mock(XMLLibImpl.class, new ViolatedAssumptionAnswer());
      XmlProcessor xmlProcessor0 = new XmlProcessor();
      XmlNode xmlNode0 = XmlNode.createText(xmlProcessor0, "3Q=(pd%|L");
      XML xML0 = new XML(xMLLibImpl0, (Scriptable) null, (XMLObject) null, xmlNode0);
      XMLList xMLList0 = xML0.comments();
      xMLList0.put(557, (Scriptable) xML0, (Object) xML0);
      XMLList xMLList1 = xMLList0.children();
      assertNotSame(xMLList1, xMLList0);
  }

  @Test(timeout = 4000)
  public void test47()  throws Throwable  {
      XMLName xMLName0 = XMLName.create("TX=A(pd%|L", "TX=A(pd%|L");
      XMLLibImpl xMLLibImpl0 = mock(XMLLibImpl.class, new ViolatedAssumptionAnswer());
      XmlProcessor xmlProcessor0 = new XmlProcessor();
      XmlNode xmlNode0 = XmlNode.createEmpty(xmlProcessor0);
      XML xML0 = new XML(xMLLibImpl0, (Scriptable) null, (XMLObject) null, xmlNode0);
      XMLList xMLList0 = xML0.comments();
      xMLList0.replace((-1), xML0);
      XMLList xMLList1 = xMLList0.child(xMLName0);
      assertNotSame(xMLList1, xMLList0);
  }

  @Test(timeout = 4000)
  public void test48()  throws Throwable  {
      XMLLibImpl xMLLibImpl0 = mock(XMLLibImpl.class, new ViolatedAssumptionAnswer());
      XmlProcessor xmlProcessor0 = new XmlProcessor();
      XmlNode xmlNode0 = XmlNode.createText(xmlProcessor0, "org.mozilla.javascript.xmlimpl.XMLList");
      XML xML0 = new XML(xMLLibImpl0, (Scriptable) null, (XMLObject) null, xmlNode0);
      XMLList xMLList0 = xML0.comments();
      xMLList0.put(557, (Scriptable) xML0, (Object) xML0);
      XMLList xMLList1 = xMLList0.child(4);
      assertNotSame(xMLList1, xMLList0);
  }

  @Test(timeout = 4000)
  public void test49()  throws Throwable  {
      XMLName xMLName0 = XMLName.create("call", "Assignment to empty XMLList without targets not supported");
      XMLLibImpl xMLLibImpl0 = mock(XMLLibImpl.class, new ViolatedAssumptionAnswer());
      NativeInt32Array nativeInt32Array0 = new NativeInt32Array();
      XmlProcessor xmlProcessor0 = new XmlProcessor();
      XmlNode xmlNode0 = XmlNode.createEmpty(xmlProcessor0);
      XML xML0 = new XML(xMLLibImpl0, nativeInt32Array0, (XMLObject) null, xmlNode0);
      XMLList xMLList0 = xMLName0.getMyValueOn(xML0);
      Object[] objectArray0 = new Object[2];
      // Undeclared exception!
      try { 
        xMLList0.call((Context) null, xML0, nativeInt32Array0, objectArray0);
        fail("Expecting exception: RuntimeException");
      
      } catch(RuntimeException e) {
         //
         // TypeError: Method \"Assignment to empty XMLList without targets not supported\" called on incompatible object.
         //
         verifyException("org.mozilla.javascript.ScriptRuntime", e);
      }
  }

  @Test(timeout = 4000)
  public void test50()  throws Throwable  {
      XMLName xMLName0 = XMLName.create("3Q=(pd%|L", "org.mozilla.javascript.xmlimpl.XMLList");
      XMLLibImpl xMLLibImpl0 = mock(XMLLibImpl.class, new ViolatedAssumptionAnswer());
      XmlProcessor xmlProcessor0 = new XmlProcessor();
      XmlNode xmlNode0 = XmlNode.createElement(xmlProcessor0, "3Q=(pd%|L", "3Q=(pd%|L");
      XML xML0 = new XML(xMLLibImpl0, (Scriptable) null, (XMLObject) null, xmlNode0);
      XMLList xMLList0 = xML0.comments();
      XMLList xMLList1 = xML0.elements(xMLName0);
      ContextFactory contextFactory0 = new ContextFactory();
      Context context0 = contextFactory0.enterContext((Context) null);
      // Undeclared exception!
      try { 
        xMLList1.call((Context) null, xMLList0, xMLList0, context0.emptyArgs);
        fail("Expecting exception: RuntimeException");
      
      } catch(RuntimeException e) {
         //
         // TypeError: Cannot find function org.mozilla.javascript.xmlimpl.XMLList in object .
         //
         verifyException("org.mozilla.javascript.ScriptRuntime", e);
      }
  }

  @Test(timeout = 4000)
  public void test51()  throws Throwable  {
      XMLName xMLName0 = XMLName.formProperty("call", "call");
      XMLLibImpl xMLLibImpl0 = mock(XMLLibImpl.class, new ViolatedAssumptionAnswer());
      NativeInt32Array nativeInt32Array0 = new NativeInt32Array();
      XmlProcessor xmlProcessor0 = new XmlProcessor();
      XmlNode xmlNode0 = XmlNode.createText(xmlProcessor0, "Assignment to empty XMLList without targets not supported");
      XML xML0 = new XML(xMLLibImpl0, nativeInt32Array0, (XMLObject) null, xmlNode0);
      XMLList xMLList0 = xMLName0.getMyValueOn(xML0);
      Object[] objectArray0 = new Object[2];
      // Undeclared exception!
      try { 
        xMLList0.call((Context) null, xML0, nativeInt32Array0, objectArray0);
        fail("Expecting exception: RuntimeException");
      
      } catch(RuntimeException e) {
         //
         // TypeError: apply is not a function, it is {1}.
         //
         verifyException("org.mozilla.javascript.ScriptRuntime", e);
      }
  }

  @Test(timeout = 4000)
  public void test52()  throws Throwable  {
      XMLName xMLName0 = XMLName.create("3Q=(pd%|L", "org.mozilla.javascript.xmlimpl.XMLList");
      XMLLibImpl xMLLibImpl0 = mock(XMLLibImpl.class, new ViolatedAssumptionAnswer());
      XmlProcessor xmlProcessor0 = new XmlProcessor();
      XmlNode xmlNode0 = XmlNode.createText(xmlProcessor0, "org.mozilla.javascript.xmlimpl.XMLList");
      XML xML0 = new XML(xMLLibImpl0, (Scriptable) null, (XMLObject) null, xmlNode0);
      XMLList xMLList0 = xML0.comments();
      xMLList0.put(557, (Scriptable) xML0, (Object) xML0);
      xMLList0.addMatches(xMLList0, xMLName0);
      assertEquals(1, ScriptableObject.READONLY);
  }

  @Test(timeout = 4000)
  public void test53()  throws Throwable  {
      XMLLibImpl xMLLibImpl0 = mock(XMLLibImpl.class, new ViolatedAssumptionAnswer());
      XmlProcessor xmlProcessor0 = new XmlProcessor();
      XmlNode xmlNode0 = XmlNode.createElement(xmlProcessor0, "-j%BS/+y", "=U");
      XML xML0 = new XML(xMLLibImpl0, (Scriptable) null, (XMLObject) null, xmlNode0);
      XMLList xMLList0 = xML0.comments();
      Object[] objectArray0 = xMLList0.getIds();
      Context context0 = Context.getCurrentContext();
      // Undeclared exception!
      try { 
        xMLList0.call(context0, xMLList0, (Scriptable) null, objectArray0);
        fail("Expecting exception: RuntimeException");
      
      } catch(RuntimeException e) {
         //
         // TypeError: org.mozilla.javascript.xmlimpl.XMLList@0000000010 is not a function, it is xml.
         //
         verifyException("org.mozilla.javascript.ScriptRuntime", e);
      }
  }
}
