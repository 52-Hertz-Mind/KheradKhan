import { useState, useCallback } from 'react';
import { exampleService } from '../services/example.service.ts';
import { ExampleModel } from '../../models/example.model.ts';

export const useExampleService = () => {
  const [fetchLoading, setFetchLoading] = useState<boolean>(false);
  const [submitLoading, setSubmitLoading] = useState<boolean>(false);
  const [examples, setExamples] = useState<ExampleModel[]>([]);
  const [example, setExample] = useState<ExampleModel>(null);

  const fetchExamples = useCallback(async () => {
    setFetchLoading(true);
    try {
      const data = await exampleService.getExamples();
      setExamples(data);
    } finally {
      setFetchLoading(false);
    }
  }, []);

  const createExample = useCallback(async (model: ExampleModel) => {
    setSubmitLoading(true);
    try {
      const newExample = await exampleService.createExample(model);
      if (newExample) {
        setExamples((prev) => [...prev, newExample]);
      }
    } finally {
      setSubmitLoading(false);
    }
  }, []);

  return {
    examples,
    example,
    fetchLoading,
    submitLoading,
    fetchExamples,
    createExample,
  };
};
