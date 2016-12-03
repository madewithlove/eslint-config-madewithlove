import 'a';
import 'b';
import 'c';
import 'd';
import 'e';
import 'f';
import 'g';
import 'h';
import 'i';
import 'j';
import 'k';
import 'l';
import path from 'path';
import * as bars from 'foo';
import 'file!../rules/import';

require(path.join(__dirname, bars.foo));
