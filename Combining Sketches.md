# Combining Sketches

When combining two or more sketches, it is VERY important that you understand the various sections of the sketch, 
the next part of this guide is describing these sections. 

You can skip over this, then come back later and read it when your combined sketches don’t work.

# Arduino basic sketches have sections

## Block comments

these can appear anywhere in the code but usually appear at the top with the author, description etc

Example



The block comments start with /* and end with */

a single line comment starts with //

When combining sketches, you can ignore the comment lines and comment blocks if you want as Arduino code ignores these.


## Libraries Include Section

This section appears at the very top of the sketch 
*(note: there are some VERY special cases where a library may have a directive required before the library is loaded. This is very unusual but can happen.  It will appear are a #define XXXXXXX before the include library statement)*

The library load/include command is in the form of

```#include <library file name>```
  
This will load and include the library if it is in the standard library path. If you load a library using the library manager, then the library will be in the correct place to be loaded with this statement.

In special cases, the library include statement might be in the form of

```#include "library file name" ```

In this case the library file is not in the normal location. 
If it is in the same directory as the sketch, then it will use this format. 
*It may also have the full path to the file as well, but this is a special case.*

##Definition Section

Usually, a sketch will have constants here. These are variable that do not change

examples

