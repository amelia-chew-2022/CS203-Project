package csd.week5;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;

public class PNGFileReader {
    public static byte[] readPNGFileAsBytes(String filePath) throws IOException {
        File file = new File(filePath);
        byte[] data = new byte[(int) file.length()];

        try (FileInputStream fileInputStream = new FileInputStream(file)) {
            fileInputStream.read(data);
        }

        return data;
    }
}

